import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/data/app-data';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

declare var require: any;

@Component({
  selector: 'eg-generate-script',
  templateUrl: './generate-script.component.html',
  styleUrls: ['./generate-script.component.scss']
})
export class GenerateScriptComponent implements OnInit {

  public langKey: string;
  public langId: any;
  public langData: any;
  public selectLangs: any;
  public objectKeys = Object.keys;
  private version = require( '../../../../../package.json').version;

  public script: string;

  public scriptData = {
    conf: {
      lcInsertMode: '3in1',
      timeDeelay: '5000',
      origLang: '1', // overrited
      destLang: '1' // overrited
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
      tOpenLcWindow: 1000 // also 'timeofplants'
    }
  };

  public scriptInsights = {
    execTime: '0m 0s',
    emailsChart: {
      labels: ['Valids', 'Emptys'],
      data: [33, 10],
      type: 'doughnut',
      legend: false,
      colors: [{
        backgroundColor: ['#cc00cc', '#e7e7eb'],
        borderColor: ['#cc00cc', '#e7e7eb'],
        borderWidth: [0, 0]
      }],
      options : {
        cutoutPercentage: 75,
        rotation: -1.25 * Math.PI,
        circumference: 1.5 * Math.PI,
        aspectRatio: 1,
        tooltips : {
          bodyFontFamily: '"Nunito", sans-serif',
          bodyFontSize: 12,
          xPadding: 10,
          yPadding: 6,
          displayColors: false
        }
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    public appData: AppData
  ) { }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
    this.langData = this.appData.getLanguage(this.langKey);
    this.langId = this.appData.getLangIdByKey(this.langKey);
    this.selectLangs = this.appData.languages;

    // init data ids
    this.scriptData.conf.origLang = this.langId.toString();
    this.scriptData.conf.destLang = this.langId.toString(); // by default same id of origin

    // equalize tEmail by timeDeelay conf
    this.scriptData.timeOuts.tEmail = parseInt(this.scriptData.conf.timeDeelay);

    // set valid emails ids
    this.scriptData.data.validEmailsId = this.validEmailsId();
    // calc total time script
    this.scriptData.data.totalTimeScript =
      (this.scriptData.timeOuts.tEmail * this.scriptData.data.validEmailsId.length) + this.scriptData.timeOuts.tOpenLcWindow;

    // recalc total time script
    const time = moment.duration(this.scriptData.data.totalTimeScript);
      this.scriptInsights.execTime = time.minutes() + 'm' + (time.seconds() > 0 ? ' ' + time.seconds() + 's' : '');
  }

  onChangeTimeDeelay(value: any) {
    // equalize tEmail by timeDeelay conf
    this.scriptData.timeOuts.tEmail = parseInt(value);

    // recalc total time script
    this.scriptData.data.totalTimeScript =
      (this.scriptData.timeOuts.tEmail * this.scriptData.data.validEmailsId.length) + this.scriptData.timeOuts.tOpenLcWindow;
  }

  onSubmit(form: NgForm) {
    this.script = this.getScript();

    const time = moment.duration(this.scriptData.data.totalTimeScript);
    this.scriptInsights.execTime = time.minutes() + 'm' + (time.seconds() > 0 ? ' ' + time.seconds() + 's' : '');
  }

  private validEmailsId() {
    const idArray = [];

    for (const emailId in this.langData.emails.templates) {

      if (!this.langData.emails.templates[emailId].tags.empty) {
        idArray.push(emailId);
      }
    }

    return idArray;
  }

  private getScript() {
    let thisScript: string, thisScript_1: string, thisScript_2: string;

    // already stringfyed variables [!]
    const arrCustomsHeader = this.getScriptCustoms('header'),
          arrCustomsFooter = this.getScriptCustoms('footer'),
          arrEmailsId = '[' + this.scriptData.data.validEmailsId.join(', ') + ']',
          arrEmailsBody = this.getScriptDefaults('html'),
          arrEmailsSubject = this.getScriptDefaults('subject'),
          defaultHeader = '`' + this.langData.emails.header.html + '`',
          defaultFooter = '`' + this.langData.emails.footer.html + '`';

    thisScript_1 = `
      setTimeout(function() {
        ${this.getConsoleLog('[Emilio Generator]', 'heading')}
        ${this.getConsoleLog('Executing the script.')}
        ${this.getConsoleLog('Please do not close or change this browser tab.')}
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
          _destLang = ${this.scriptData.conf.destLang};

      var T1 = ${this.scriptData.timeOuts.t1},
          T2 = ${this.scriptData.timeOuts.t2},
          T3 = ${this.scriptData.timeOuts.t3},
          T4 = ${this.scriptData.timeOuts.t4},
          T_EMAIL = ${this.scriptData.timeOuts.tEmail},
          T_OPEN_LC_WINDOW = ${this.scriptData.timeOuts.tOpenLcWindow};

      var ST_T1 = null, ST_T2 = null, ST_T3 = null, ST_T4 = null;

      var emailTimeSeconds = T_EMAIL / 1000;
      var email_index = 0;
    `;

    thisScript_2 = `
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
                ${this.getConsoleLog('Fail open window template id-\' + ID_TEMPLATE + \'', 'error')}
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

                      ${this.getConsoleLog('Success save template id-\' + ID_TEMPLATE + \' time: \' + emailTimeSeconds + \'s [\' + email_index + \'/\' + _arrEmailsId.length + \']')}
											emailTimeSeconds += (T_EMAIL / 1000);
										} catch(e) {
                      ${this.getConsoleLog('Fail save template id-\' + ID_TEMPLATE + \'', 'error')}
										}
									}
								}
							}, T1);
						} else {
              ${this.getConsoleLog('Template id-\' + ID_TEMPLATE + \' not found in LC. [\' + (email_index + 1) + \'/\' + _arrEmailsId.length + \']', 'warn')}
						}

						email_index ++;
					} else {
            ${this.getConsoleLog('Script executed 100%')}
            ${this.getConsoleLog('Bye 😘')}
            ${this.getConsoleLog('[Emilio Generator]', 'heading')}
						clearInterval(SI_MAIN);
					}

				}, T1+T2+T3+T4 + T_EMAIL);

      }, T_OPEN_LC_WINDOW);
    `;

    thisScript_2 = thisScript_2.replace(/\/\*.*?\*\//g, ''); // replace js comments
    thisScript_2 = thisScript_2.replace(/[\t\n]/g, ''); // minify js
    thisScript = thisScript_1 + thisScript_2;

    return thisScript;
  }

  private getScriptCustoms(type: string) {
    const arr = [];
    const ucType = type.charAt(0).toUpperCase() + type.slice(1);

    this.scriptData.data.validEmailsId.forEach(emailId => {
      const thisEmail = this.langData.emails.templates[emailId];

      if (thisEmail.tags['custom' + ucType] && thisEmail[type].html.trim().length > 0) {
        arr.push(thisEmail[type].html);
      } else {
        arr.push('');
      }
    });

    return '[`' + arr.join('`, `') + '`]';
  }

  private getScriptDefaults(type: string) {
    const arr = [];

    this.scriptData.data.validEmailsId.forEach(emailId => {
      const thisEmail = this.langData.emails.templates[emailId];
        arr.push(thisEmail[type]);
    });

    return '[`' + arr.join('`, `') + '`]';
  }

  private getConsoleLog(message: string, type: string = '') {
    const toLength = 118;
    let styles = '';

    switch (type) {
      case 'heading':
        message = '%c' + message;
        styles = `,'
          background-color: #cc00cc;
          color: #FFF;
          padding: 4px 6px;
          border-radius: 3px;
        '`;
        break;

      case 'error':
        message = '%cERROR%c ' + message;
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

      case 'warn':
        message = '%cWARN%c ' + message;
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

      default:
        message = '%c' + message;
        styles = `,'
          color: #5c649c;
          padding: 0 6px;
        '`;
        break;
    }

    if (message.length < toLength) {
      message += Array(toLength - message.length + 1).join(' ');
    }

    return `console.log('${message}'${styles.replace(/[\t\n]*(\s\s)*/g, '')});`;
  }

  // charts events
  public chartClicked(event: any) {
  }

  public chartHovered(event: any) {
  }
}
