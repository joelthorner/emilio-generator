import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppData } from "src/app/data/app-data";
import { NgForm } from "@angular/forms";
import * as moment from "moment";
import { BeyondService } from "src/app/lib/services/beyond.service";

import "brace/theme/xcode";
import "brace/mode/javascript";

declare var require: any;

@Component({
  selector: "eg-generate-script",
  templateUrl: "./generate-script.component.html",
  styleUrls: ["./generate-script.component.scss"],
})
export class GenerateScriptComponent implements OnInit {
  public langKey: string;
  public langId: any;
  public langData: any;
  public selectLangs: any;
  public objectKeys = Object.keys;
  private version = require("../../../../../package.json").version;
  public beyondValue: boolean;

  public script = "";

  public scriptData = {
    conf: {
      mailAccountId: '1',
      lcInsertMode: "3in1",
      timeDeelay: "5000",
      origLang: "1", // overrited
      destLang: "1", // overrited
    },
    data: {
      validEmailsId: [], // overrited
      totalTimeScript: 0,
    },
    timeOuts: {
      t1: 1000,
      t2: 100,
      t3: 500,
      t4: 500,
      tEmail: 5000,
      tOpenLcWindow: 1000, // also 'timeofplants'
    },
  };

  public scriptInsights = {
    execTime: "0m 0s",
    stringLen: 0,
    emails: {
      valid: 0,
      total: 0,
      validPerCent: 0,
    },
    emailsChart: {
      labels: ["Valids", "Emptys"],
      data: [0, 0],
      type: "doughnut",
      legend: false,
      colors: [
        {
          backgroundColor: ["#cc00cc", "#e7e7eb"],
          borderColor: ["#cc00cc", "#e7e7eb"],
          borderWidth: [0, 0],
        },
      ],
      options: {
        cutoutPercentage: 75,
        rotation: -1.25 * Math.PI,
        circumference: 1.5 * Math.PI,
        aspectRatio: 1,
        tooltips: {
          bodyFontFamily: '"Nunito", sans-serif',
          bodyFontSize: 12,
          xPadding: 10,
          yPadding: 6,
          displayColors: false,
        },
      },
    },
  };

  public aceOptions = {
    useWorker: false,
    // maxLines: 15,
    minLines: 10,
    tabSize: 2,
    showPrintMargin: false,
  };

  public copyButton = true;

  constructor(
    private route: ActivatedRoute,
    public appData: AppData,
    private beyond: BeyondService
  ) {}

  ngOnInit() {
    this.beyond.currentBeyond.subscribe((beyondValue) => {
      this.beyondValue = beyondValue;
    });
    this.langKey = this.route.snapshot.params["langKey"];
    this.langData = this.appData.getLanguage(this.langKey);
    this.langId = this.appData.getLangIdByKey(this.langKey);
    this.selectLangs = this.appData.languages;

    if (this.beyondValue === true) {
      this.scriptData.conf.lcInsertMode = "3in3";
      this.scriptData.timeOuts.t1 += 500;
      this.scriptData.timeOuts.t2 += 500;
      this.scriptData.timeOuts.t3 += 500;
      this.scriptData.timeOuts.t4 += 1000;
      this.scriptData.timeOuts.tEmail += 1000;
    }

    // init data ids [data]
    this.scriptData.conf.origLang = this.langId.toString();
    this.setLcDestLang();

    // equalize tEmail by timeDeelay conf [data]
    this.setTimeoutEmail();
    // [data]
    this.scriptData.data.validEmailsId = this.getValidEmailsId();
    // [data]
    this.setTotalTimeScript();
    // [visual]
    this.setExecTime();
    // [visual]
    this.setValidsChartData();

    this.getScript();
  }

  // scriptInsights.execTime - '2m 45s'
  private setExecTime() {
    const time = moment.duration(this.scriptData.data.totalTimeScript);
    this.scriptInsights.execTime =
      time.minutes() +
      "m" +
      (time.seconds() > 0 ? " " + time.seconds() + "s" : "");
  }

  // scriptInsights.stringLen - 123000
  private setStringLen() {
    this.scriptInsights.stringLen = this.script.length;
  }

  // scriptData.data.totalTimeScript - 11150
  private setTotalTimeScript() {
    this.scriptData.data.totalTimeScript =
      this.scriptData.timeOuts.tEmail *
        this.scriptData.data.validEmailsId.length +
      this.scriptData.timeOuts.tOpenLcWindow;
  }

  // scriptData.timeOuts.tEmail - 5000 (5 seconds)
  private setTimeoutEmail(value: any = this.scriptData.conf.timeDeelay) {
    this.scriptData.timeOuts.tEmail = parseInt(value);
  }
  
  private setMailAccountId(value: any = this.scriptData.conf.mailAccountId) {
    this.scriptData.conf.mailAccountId = value;
  }

  // scriptData.conf.destLang - 1
  private setLcDestLang(value: any = this.langId.toString()) {
    // by default same id of origin
    this.scriptData.conf.destLang = value;
  }

  private setLcInsertMode(value: any) {
    this.scriptData.conf.lcInsertMode = value;
  }

  // return email templates array ids - [1, 2, 3]
  private getValidEmailsId() {
    const idArray = [];

    for (const emailId in this.langData.emails.templates) {
      if (!this.langData.emails.templates[emailId].tags.empty) {
        idArray.push(emailId);
      }
    }

    return idArray;
  }

  // set data visual card [valid emails] (chart)
  private setValidsChartData() {
    // '20/30'
    this.scriptInsights.emails.valid = this.getValidEmailsId().length;
    this.scriptInsights.emails.total = Object.keys(
      this.langData.emails.templates
    ).length;

    // chart
    const emptys =
      this.scriptInsights.emails.total - this.scriptInsights.emails.valid;
    this.scriptInsights.emailsChart.data = [
      this.scriptInsights.emails.valid,
      emptys,
    ];

    // % valids
    this.scriptInsights.emails.validPerCent =
      Math.round(
        (this.scriptInsights.emails.valid / this.scriptInsights.emails.total) *
          100 *
          10
      ) / 10;
  }

  // return script for LC
  private getScript() {
    let thisScript: string, thisScript_1: string, thisScript_2: string;

    // already stringfyed variables [!]
    const arrCustomsHeader = this.getScriptCustoms("header"),
      arrCustomsFooter = this.getScriptCustoms("footer"),
      arrEmailsId = "[" + this.scriptData.data.validEmailsId.join(", ") + "]",
      arrEmailsBody = this.getScriptDefaults("html"),
      arrEmailsSubject = this.getScriptDefaults("subject"),
      defaultHeader = "`" + this.langData.emails.header.html + "`",
      defaultFooter = "`" + this.langData.emails.footer.html + "`";

    thisScript_1 = `
      setTimeout(function() {
        ${this.getConsoleLog("[Emilio Generator] v" + this.version, "heading")}
        ${this.getConsoleLog("Executing the script.")}
        ${this.getConsoleLog("Please do not close or change this browser tab.")}
      }, 1000);

      openMailTypes();

      var _arrCustomsHeader = ${arrCustomsHeader},
          _arrCustomsFooter = ${arrCustomsFooter},
          _arrEmailsId = ${arrEmailsId},
          _arrEmailsBody = ${arrEmailsBody},
          _arrEmailsSubject = ${arrEmailsSubject},
          _defaultHeader = ${defaultHeader},
          _defaultFooter = ${defaultFooter},
          _lcInsertMode = "${this.scriptData.conf.lcInsertMode}",
          _destLang = ${this.scriptData.conf.destLang},
          _confMailAccountId = ${this.scriptData.conf.mailAccountId};

      var T1 = ${this.scriptData.timeOuts.t1},
          T2 = ${this.scriptData.timeOuts.t2},
          T3 = ${this.scriptData.timeOuts.t3},
          T4 = ${this.scriptData.timeOuts.t4},
          T_EMAIL = ${this.scriptData.timeOuts.tEmail},
          T_OPEN_LC_WINDOW = ${this.scriptData.timeOuts.tOpenLcWindow};

      var ST_T1 = null, ST_T2 = null, ST_T3 = null, ST_T4 = null, SI_NO = null;

      var emailTimeSeconds = T_EMAIL / 1000;
      var email_index = 0;
    `;

    thisScript_2 = this.beyondValue
      ? this.getScriptPart2Beyond()
      : this.getScriptPart2();

    thisScript_2 = thisScript_2.replace(/\/\*.*?\*\//g, ""); // replace js comments
    thisScript_2 = thisScript_2.replace(/[\t\n]/g, ""); // minify js
    thisScript = thisScript_1 + thisScript_2;

    this.script = thisScript;
    this.setStringLen();
  }

  private getScriptPart2() {
    return `
      setTimeout(function(){
        var SI_MAIN = setInterval(function() {
          if (email_index<_arrEmailsId.length) {
            var ID_TEMPLATE = _arrEmailsId[email_index],
                SUBJECT_VALUE = _arrEmailsSubject[email_index],
                HTML_VALUE = _arrEmailsBody[email_index],
                HEADER_VALUE = _defaultHeader,
                FOOTER_VALUE = _defaultFooter;
            if (_arrCustomsHeader[email_index].length) {
              HEADER_VALUE = _arrCustomsHeader[email_index];
            }
            if (_arrCustomsFooter[email_index].length) {
              FOOTER_VALUE = _arrCustomsFooter[email_index];
            }
            clearTimeout(ST_T1);
            clearTimeout(ST_T2);
            clearTimeout(ST_T3);
            clearTimeout(ST_T4);
            if (document.querySelectorAll('[ondblclick*="editMailType(' + ID_TEMPLATE + '"]').length) {
              try {
                editMailType(ID_TEMPLATE);
              } catch(e) {
                ${this.getConsoleLog(
                  "Fail open window template id-' + ID_TEMPLATE + '",
                  "error"
                )}
              }
              ST_T1 = setTimeout(function() {
                var windowForm = document.querySelectorAll('input[name="mailId"][type="hidden"][value="' + ID_TEMPLATE + '"]');
                if (windowForm[0]) {
                  windowForm = windowForm[0].parentElement;
                  var allSubjects = windowForm.querySelectorAll('input[name*="subject_"]');
                  for (var index_subjects = 0; index_subjects < allSubjects.length; index_subjects++) {
                    if (!allSubjects[index_subjects].value.length) {
                      allSubjects[index_subjects].value = " ";
                    }
                  }
                  var img = windowForm.querySelectorAll('.languageTabsContainer div.tab img.previewWindowTab[onclick*="languageId=' + _destLang + '\\');"]');
                  if (img[0]) {
                    var tab = img[0].parentElement;
                    tab.click();
                    /* SET DATA */
                    try {
                      ST_T2 = setTimeout(function() {
                        var contentTab = windowForm.querySelectorAll('.tabsContent .tabContent:not([style*="none"])');
                        if (contentTab[0]) {
                          var editorsToPlain = contentTab[0].querySelectorAll('._viewPlain');
                          for (var i_3= 0; i_3 < editorsToPlain.length; i_3++) {
                            editorsToPlain[i_3].click();
                          }
                          /* set subject */
                          var subject = contentTab[0].querySelectorAll('input[name="subject_' + _destLang + '"][type="text"]');
                          if (subject[0]) {
                            subject[0].setAttribute('value', SUBJECT_VALUE);
                          }
                          /* set header */
                          var header = contentTab[0].querySelectorAll('textarea[name="header_' + _destLang + '"]');
                          if (header[0]) {
                            if (_lcInsertMode == "3in3") {
                              header[0].value = HEADER_VALUE;
                            } else if(_lcInsertMode == "3in1") {
                              header[0].value = '';
                            }
                          }
                          /* set footer */
                          var footer = contentTab[0].querySelectorAll('textarea[name="footer_' + _destLang + '"]');
                          if (footer[0]) {
                            if (_lcInsertMode == "3in3") {
                              footer[0].value = FOOTER_VALUE;
                            } else if(_lcInsertMode == "3in1") {
                              footer[0].value = '';
                            }
                          }
                          /* set htmlcontent */
                          var body = contentTab[0].querySelectorAll('textarea[name="body_' + _destLang + '"]');
                          if (body[0]) {
                            if (_lcInsertMode == "3in3") {
                              body[0].value = HTML_VALUE;
                            } else if(_lcInsertMode == "3in1") {
                              body[0].value = HEADER_VALUE + HTML_VALUE + FOOTER_VALUE;
                            }
                          }
                          /* SAVE TEMPLATE AND CLOSE */
                          ST_T3 = setTimeout(function() {
                            var save = windowForm.querySelectorAll('[type="submit"]');
                            if (save[0]) {
                              save[0].click();
                              ST_T4 = setTimeout(function() {
                                var close = windowForm.querySelectorAll('[ls="common.cancel"]');
                                if (close[0]) {
                                  close[0].click();
                                }
                              }, T4);
                            }
                          }, T3);
                        }
                      }, T2);
                      ${this.getConsoleLog(
                        "save template id-' + ID_TEMPLATE + ' time: ' + emailTimeSeconds + 's [' + email_index + '/' + _arrEmailsId.length + ']",
                        "success"
                      )}
                      emailTimeSeconds += (T_EMAIL / 1000);
                    } catch(e) {
                      ${this.getConsoleLog(
                        "Fail save template id-' + ID_TEMPLATE + '",
                        "error"
                      )}
                    }
                  }
                }
              }, T1);
            } else {
              ${this.getConsoleLog(
                "Template id-' + ID_TEMPLATE + ' not found in LC. [' + (email_index + 1) + '/' + _arrEmailsId.length + ']",
                "warn"
              )}
            }
            email_index ++;
          } else {
            ${this.getConsoleLog("Script executed 100%")}
            ${this.getConsoleLog("Bye 🦄")}
            ${this.getConsoleLog(
              "[Emilio Generator] v" + this.version,
              "heading"
            )}
            clearInterval(SI_MAIN);
          }
        }, T1+T2+T3+T4 + T_EMAIL);
      }, T_OPEN_LC_WINDOW);
    `;
  }

  private getScriptPart2Beyond() {
    return `
      setTimeout(function(){

        var SI_MAIN = setInterval(function() {

          if (email_index<_arrEmailsId.length) {
            var ID_TEMPLATE = _arrEmailsId[email_index],
                SUBJECT_VALUE = _arrEmailsSubject[email_index],
                HTML_VALUE = _arrEmailsBody[email_index],
                HEADER_VALUE = _defaultHeader,
                FOOTER_VALUE = _defaultFooter;

            if (_arrCustomsHeader[email_index].length) {
              HEADER_VALUE = _arrCustomsHeader[email_index];
            }
            if (_arrCustomsFooter[email_index].length) {
              FOOTER_VALUE = _arrCustomsFooter[email_index];
            }

            clearTimeout(ST_T1);
            clearTimeout(ST_T2);
            clearTimeout(ST_T3);
            clearTimeout(ST_T4);

            if (document.querySelectorAll('[ondblclick*="editMailType(' + ID_TEMPLATE + '"]').length) {
              try {
                editMailType(ID_TEMPLATE);
              } catch(e) {
                ${this.getConsoleLog(
                  "Fail open window template id-' + ID_TEMPLATE + '",
                  "error"
                )}
              }

              ST_T1 = setTimeout(function() {
                var windowForm = document.querySelectorAll('input[name="type"][type="hidden"][value="' + ID_TEMPLATE + '"]');

                if (windowForm[0]) {
                  windowForm = windowForm[0].parentElement;
                  var allIndexesLangTabs = windowForm.querySelector('[name="languages"]');
                  var indexLanguage = 0;
                  
                  if (allIndexesLangTabs) {
                    var allIndexesLangTabsValArr = allIndexesLangTabs.value.split(',');
                    for (let i_l = 0; i_l < allIndexesLangTabsValArr.length; i_l++) {
                      let langId = allIndexesLangTabsValArr[i_l];
                      if (parseInt(langId) === _destLang) {
                        indexLanguage = i_l + 1;
                      }
                    }
                  }

                  /* Select cuenta de curreu */
                  var mailAccountId = windowForm.querySelector('[name="mailAccountId"]');
                  var mailAccountId_selected = '';
                  if (mailAccountId) {
                    if (mailAccountId.value === '' || mailAccountId.value === '0') {
                      if (mailAccountId.querySelector('option[value="' + _confMailAccountId + '"]')) {
                        mailAccountId.value = _confMailAccountId;
                        mailAccountId_selected = _confMailAccountId;
                      } else {
                        var firstValidOption = mailAccountId.querySelectorAll('option[value]:not([value="0"]):not([value=""])');
                        if (firstValidOption && firstValidOption.length >= 1) {
                          mailAccountId_selected = firstValidOption[0].getAttribute('value');
                          mailAccountId.value = mailAccountId_selected;
                        }
                      }
                    } else {
                      mailAccountId_selected = _confMailAccountId;
                    }
                  }

                  if (mailAccountId_selected != '') {
                    var allSubjects = windowForm.querySelectorAll('input[name*="subject_"]');
                    for (var index_subjects = 0; index_subjects < allSubjects.length; index_subjects++) {
                      if (!allSubjects[index_subjects].value.length) {
                        allSubjects[index_subjects].value = " ";
                      }
                    }

                    var img = windowForm.querySelectorAll('.languageTabsContainer div.tab[index="' + indexLanguage + '"]');
                    if (img[0]) {
                      var tab = img[0];
                      tab.click();

                      /* SET DATA */
                      try {
                        ST_T2 = setTimeout(function() {
                          var contentTab = windowForm.querySelectorAll('.tabsContent .tabContent[index="' + indexLanguage + '"]');
                          if (contentTab[0]) {
                            /* set subject */
                            var subject = contentTab[0].querySelectorAll('input[name="subject_' + _destLang + '"][type="text"]');
                            if (subject[0]) {
                              subject[0].setAttribute('value', SUBJECT_VALUE);
                            }
                            /* set header */
                            var header = contentTab[0].querySelectorAll('textarea[name="header_' + _destLang + '"]');
                            if (header[0]) {
                              if (_lcInsertMode == "3in3" || _lcInsertMode == "3in1") {
                                header[0].value = HEADER_VALUE;

                                var editor = ace.edit(contentTab[0].querySelector('.editor_header_' + _destLang));
                                if (editor) {
                                  editor.getSession().setValue(HEADER_VALUE);
                                }
                              }
                            }
                            /* set footer */
                            var footer = contentTab[0].querySelectorAll('textarea[name="footer_' + _destLang + '"]');
                            if (footer[0]) {
                              if (_lcInsertMode == "3in3" || _lcInsertMode == "3in1") {
                                footer[0].value = FOOTER_VALUE;
                                
                                var editor = ace.edit(contentTab[0].querySelector('.editor_footer_' + _destLang));
                                if (editor) {
                                  editor.getSession().setValue(FOOTER_VALUE);
                                }
                              }
                            }
                            /* set htmlcontent */
                            var body = contentTab[0].querySelectorAll('textarea[name="body_' + _destLang + '"]');
                            if (body[0]) {
                              if (_lcInsertMode == "3in3" || _lcInsertMode == "3in1") {
                                body[0].value = HTML_VALUE;
                                
                                var editor = ace.edit(contentTab[0].querySelector('.editor_body_' + _destLang));
                                if (editor) {
                                  editor.getSession().setValue(HTML_VALUE);
                                }
                              }
                            }

                            /* SAVE TEMPLATE AND CLOSE */
                            ST_T3 = setTimeout(function() {
                              var save = windowForm.querySelectorAll('[type="submit"]');
                              if (save[0]) {
                                save[0].click();

                                SI_NO = setInterval(() => {
                                  var no = document.querySelector('.messageBox .rightButtons .button.red');
                                  if (no) {
                                    no.click();
                                  }
                                }, 200);

                                ST_T4 = setTimeout(function() {
                                  var close = windowForm.closest('.window').querySelectorAll('.closeButton');
                                  if (close[0]) {
                                    close[0].click();
                                  }
                                }, T4);
                              }
                            }, T3);
                          }
                        }, T2);

                        ${this.getConsoleLog(
                          "save template id-' + ID_TEMPLATE + ' time: ' + emailTimeSeconds + 's [' + email_index + '/' + _arrEmailsId.length + ']",
                          "success"
                        )}
                        emailTimeSeconds += (T_EMAIL / 1000);
                      } catch(e) {
                        ${this.getConsoleLog(
                          "Fail save template id-' + ID_TEMPLATE + '",
                          "error"
                        )}
                      }
                    }
                  } else {
                    ${this.getConsoleLog(
                      "No hay configurada ninguna cuenta de email! Mission abortada! Por favor crea una.",
                      "error"
                    )}
                  }
                }
              }, T1);
            } else {
              ${this.getConsoleLog(
                "Template id-' + ID_TEMPLATE + ' not found in LC. [' + (email_index + 1) + '/' + _arrEmailsId.length + ']",
                "warn"
              )}
            }

            email_index ++;
          } else {
            ${this.getConsoleLog("Script executed 100%")}
            ${this.getConsoleLog("Bye 🦄")}
            ${this.getConsoleLog(
              "[Emilio Generator] v" + this.version,
              "heading"
            )}
            clearInterval(SI_NO);
            clearInterval(SI_MAIN);
          }

        }, T1+T2+T3+T4 + T_EMAIL);

      }, T_OPEN_LC_WINDOW);
    `;
  }

  // get email header/footer contents array - [`html`, `html`]
  private getScriptCustoms(type: string) {
    const arr = [];
    const ucType = type.charAt(0).toUpperCase() + type.slice(1);

    this.scriptData.data.validEmailsId.forEach((emailId) => {
      const thisEmail = this.langData.emails.templates[emailId];

      if (
        thisEmail.tags["custom" + ucType] &&
        thisEmail[type].html.trim().length > 0
      ) {
        arr.push(thisEmail[type].html);
      } else {
        arr.push("");
      }
    });

    return "[`" + arr.join("`, `") + "`]";
  }

  // get email array default string (subject or body) - [`html`, `html`]
  private getScriptDefaults(type: string) {
    const arr = [];

    this.scriptData.data.validEmailsId.forEach((emailId) => {
      const thisEmail = this.langData.emails.templates[emailId];
      arr.push(thisEmail[type]);
    });

    return "[`" + arr.join("`, `") + "`]";
  }

  // return string console log
  private getConsoleLog(message: string, type: string = "") {
    const toLength = 118;
    let styles = "";

    switch (type) {
      case "heading":
        message = "%c" + message;
        styles = `,'
          background-color: #cc00cc;
          color: #FFF;
          padding: 4px 6px;
          border-radius: 3px;
        '`;
        break;

      case "error":
        message = "%cERROR%c " + message;
        styles = `,'
          color: #fff;
          background-color: #e02857;
          padding: 0px 4px;
          margin-left:6px;
        ', '
          color: #e02857;
          padding-right:6px;
        '`;
        break;

      case "warn":
        message = "%cWARN%c " + message;
        styles = `,'
          color: #fff;
          background-color: #da8a00;
          padding: 0px 4px;
          margin-left:6px;
        ', '
          color: #da8a00;
          padding-right:6px;
        '`;
        break;

      case "success":
        message = "%cSUCCESS%c " + message;
        styles = `,'
          color: #fff;
          background-color: #0099cc;
          padding: 0px 4px;
          margin-left:6px;
        ', '
          color: #0099cc;
          padding-right:6px;
        '`;
        break;

      default:
        message = "%c" + message;
        styles = `,'
          color: #5c649c;
          padding: 0 6px;
        '`;
        break;
    }

    if (message.length < toLength) {
      message += Array(toLength - message.length + 1).join(" ");
    }

    return `console.log('${message}'${styles.replace(/[\t\n]*(\s\s)*/g, "")});`;
  }

  // [Events] ----------------------------------------------------------
  public onChangeMailAccountId(value: any) {
    this.setMailAccountId(value);
    this.setTotalTimeScript();
    this.setExecTime();

    this.getScript();
  }

  public onChangeTimeDeelay(value: any) {
    this.setTimeoutEmail(value);
    this.setTotalTimeScript();
    this.setExecTime();

    this.getScript();
  }

  public onChangeLcInsertMode(value: any) {
    this.setLcInsertMode(value);
    this.setTotalTimeScript();
    this.setExecTime();

    this.getScript();
  }

  public onChangeDestLang(value: any) {
    this.setLcDestLang(value);
    this.setTotalTimeScript();
    this.setExecTime();

    this.getScript();
  }

  // generate script event
  public onSubmit(form: NgForm) {
    // this.setExecTime();
    // this.getScript();
  }

  public copyScriptAction(event: any, scriptTextArea: any) {
    scriptTextArea.select();
    document.execCommand("copy");
    scriptTextArea.setSelectionRange(0, 0);
    this.copyButton = !this.copyButton;

    setTimeout(() => {
      this.copyButton = !this.copyButton;
    }, 1500);
  }

  // charts events
  // public chartClicked(event: any) {
  // }

  // public chartHovered(event: any) {
  // }
}
