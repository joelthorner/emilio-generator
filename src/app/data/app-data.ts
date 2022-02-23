import { Injectable } from "@angular/core";
import { LANGUAGES } from "./app-data-languages";
import { LANGUAGES_BEYOND } from "./app-data-languages-beyond";
import { PREVIEWDATA } from "./app-data-preview";
import { JszipService } from "../lib/services/jszip.service";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class AppData {
  public languages: any = LANGUAGES;
  public previewDataInclude: any = PREVIEWDATA;

  public previewSrc: any;
  public previewData = {
    id: 1,
    name: "",
    options: {
      logo: this.previewDataInclude.logo,
      social: this.previewDataInclude.social,
    },
    refresh: 0,
    style: this.previewDataInclude.css,
  };

  constructor(private jszip: JszipService, public sanitizer: DomSanitizer) {
    this.checkAll();
  }

  public changeLanguageSource(isBeyond: boolean) {
    if (isBeyond) {
      this.languages = LANGUAGES_BEYOND;
    } else {
      this.languages = LANGUAGES;
    }
    this.checkAll();
  }

  public checkAll() {
    let copyLanguages = this.languages;

    copyLanguages = this.checkEmptyLanguages(copyLanguages);
    copyLanguages = this.checkTemplatesTags(copyLanguages);
    copyLanguages = this.trimHtml(copyLanguages);

    return (this.languages = copyLanguages);
  }

  // set/update languages[x].empty
  public checkEmptyLanguages(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      let emptyLanguage = true;
      const thisLanguage = languagesClone[langId];

      for (const emailId in thisLanguage.emails.templates) {
        if (thisLanguage.emails.templates[emailId].html.trim().length > 0) {
          emptyLanguage = false;
        }
      }
      thisLanguage.empty = emptyLanguage;
    }
    return languagesClone;
  }

  // set/update languages[x].emails.header.tags,
  //    languages[x].emails.footer.tags,
  //    languages[x].emails.templates[x].tags
  public checkTemplatesTags(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      const thisLanguage = languagesClone[langId];

      // set header 'tags' property
      thisLanguage.emails.header.tags = {
        empty: thisLanguage.emails.header.html.trim().length === 0,
      };

      // set footer 'tags' property
      thisLanguage.emails.footer.tags = {
        empty: thisLanguage.emails.footer.html.trim().length === 0,
      };

      for (const emailId in thisLanguage.emails.templates) {
        // set template 'tags' property
        thisLanguage.emails.templates[emailId].tags = {
          empty:
            thisLanguage.emails.templates[emailId].html.trim().length === 0,
          noSubject:
            thisLanguage.emails.templates[emailId].subject.trim().length === 0,
          customHeader:
            typeof thisLanguage.emails.templates[emailId].header === "undefined"
              ? false
              : true,
          customFooter:
            typeof thisLanguage.emails.templates[emailId].footer === "undefined"
              ? false
              : true,
        };

        // set custom header 'tags' property
        if (
          typeof thisLanguage.emails.templates[emailId].header !== "undefined"
        ) {
          thisLanguage.emails.templates[emailId].header.tags = {
            empty:
              thisLanguage.emails.templates[emailId].header.html.trim()
                .length === 0,
          };
        }
        // set custom footer 'tags' property
        if (
          typeof thisLanguage.emails.templates[emailId].footer !== "undefined"
        ) {
          thisLanguage.emails.templates[emailId].footer.tags = {
            empty:
              thisLanguage.emails.templates[emailId].footer.html.trim()
                .length === 0,
          };
        }
      }
    }
    return languagesClone;
  }

  // get language struct by key 'es'
  public getLanguage(key: string) {
    const languagesClone = this.languages;
    let findedLang: any = {};
    let _langId: any;

    for (const langId in this.languages) {
      const thisLanguage = languagesClone[langId];

      if (thisLanguage.key === key) {
        findedLang = thisLanguage;
        _langId = langId;
      }
    }

    findedLang.id = _langId;

    return findedLang;
  }

  // get language id by key 'es'
  public getLangIdByKey(key: string) {
    const languagesClone = this.languages;
    let findedLangId: any;

    for (const langId in this.languages) {
      const thisLanguage = languagesClone[langId];

      if (thisLanguage.key === key) {
        findedLangId = langId;
      }
    }

    return findedLangId;
  }

  // get email data by lang key 'es' and email id 1
  public getEmailData(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    let emailData: any;

    for (const templateId in langData.emails.templates) {
      const thisTemplate = langData.emails.templates[templateId];

      if (parseInt(templateId) === parseInt(emailId)) {
        emailData = thisTemplate;
      }
    }

    return emailData;
  }

  // set string value 'html' or 'subject'
  public setStringVal(langKey: string, path: string, code: string) {
    let evalPath = "this.languages";
    for (const langId in this.languages) {
      if (this.languages[langId].key === langKey) {
        evalPath += "[" + langId + "]";
      }
    }

    path.split(".").forEach((valueKey) => {
      evalPath += "." + valueKey;
    });

    const toEval = evalPath + "=`" + code + "`;";
    eval(toEval);

    this.languages = this.checkAll();
  }

  // trim all html contents first empty '\n'
  public trimHtml(languagesObj: any) {
    const languagesClone = languagesObj;

    for (const langId in languagesClone) {
      const thisLanguage = languagesClone[langId];

      thisLanguage.emails.header.html = thisLanguage.emails.header.html.replace(
        /^\n{1}/i,
        ""
      );
      thisLanguage.emails.footer.html = thisLanguage.emails.footer.html.replace(
        /^\n{1}/i,
        ""
      );

      for (const emailId in thisLanguage.emails.templates) {
        thisLanguage.emails.templates[emailId].html =
          thisLanguage.emails.templates[emailId].html.replace(/^\n{1}/i, "");

        if (
          typeof thisLanguage.emails.templates[emailId].header !== "undefined"
        ) {
          thisLanguage.emails.templates[emailId].header.html =
            thisLanguage.emails.templates[emailId].header.html.replace(
              /^\n{1}/i,
              ""
            );
        }
        if (
          typeof thisLanguage.emails.templates[emailId].footer !== "undefined"
        ) {
          thisLanguage.emails.templates[emailId].footer.html =
            thisLanguage.emails.templates[emailId].footer.html.replace(
              /^\n{1}/i,
              ""
            );
        }
      }
    }
    return languagesClone;
  }

  // execute download zip by language key
  public generateLanguageZip(langKey: string) {
    const data = this.getLanguage(langKey);
    const emailsArray = [];

    for (const templateId in data.emails.templates) {
      const template = data.emails.templates[templateId];

      let thisHeader = data.emails.header.html;
      if (template.tags.customHeader) {
        if (!template.header.tags.empty) {
          thisHeader = template.header.html;
        }
      }

      const thisBody = template.html;

      let thisFooter = data.emails.footer.html;
      if (template.tags.customFooter) {
        if (!template.footer.tags.empty) {
          thisFooter = template.footer.html;
        }
      }

      emailsArray.push({
        fileName:
          template.name + " [id " + templateId + "] [" + data.key + "].html",
        content: thisHeader + thisBody + thisFooter,
      });
    }

    const zip = this.jszip.setZip(emailsArray);
    this.jszip.saveAsZip(
      zip,
      "emilio-generator [id " + data.id + "] [" + data.key + "].zip"
    );
  }

  // execute download html by language key and email id
  public generateEmailHtml(langKey: string, emailId: any) {
    const data = this.getLanguage(langKey);

    for (const templateId in data.emails.templates) {
      if (parseInt(templateId) === parseInt(emailId)) {
        const template = data.emails.templates[templateId];

        let thisHeader = data.emails.header.html;
        if (template.tags.customHeader) {
          if (!template.header.tags.empty) {
            thisHeader = template.header.html;
          }
        }

        const thisBody = template.html;

        let thisFooter = data.emails.footer.html;
        if (template.tags.customFooter) {
          if (!template.footer.tags.empty) {
            thisFooter = template.footer.html;
          }
        }

        const fileName =
          template.name + " [id " + templateId + "] [" + data.key + "].html";
        const content = thisHeader + thisBody + thisFooter;
        this.jszip.saveAsHtml(content, fileName, "text/html;charset=utf-8");

        return true;
      }
    }
    return false;
  }

  // set sanitized src for iframe with email preview
  public setPreviewIframeContent(langKey: string) {
    this.previewSrc = "";
    this.previewData.refresh++;

    const langId = this.getLanguage(langKey).id;

    let header = this.languages[langId].emails.header.html;
    if (
      this.languages[langId].emails.templates[this.previewData.id].tags
        .customHeader
    ) {
      header =
        this.languages[langId].emails.templates[this.previewData.id].header
          .html;
    }

    const body =
      this.languages[langId].emails.templates[this.previewData.id].html;

    let footer = this.languages[langId].emails.footer.html;
    if (
      this.languages[langId].emails.templates[this.previewData.id].tags
        .customFooter
    ) {
      footer =
        this.languages[langId].emails.templates[this.previewData.id].footer
          .html;
    }

    let html = header + body + footer;
    html = this.previewReplaces(html);
    html = this.previewReplacesBeyond(html);

    let iframeSrc =
      "data:text/html;charset=utf-8," +
      encodeURI(
        '<html><head><body class="refresh-' +
          this.previewData.refresh +
          '">' +
          this.previewData.style
      ) +
      encodeURI(html) +
      encodeURI("</body></html>");

    // fix chrome set '#'
    iframeSrc = iframeSrc.replace(new RegExp("#", "g"), "%23");

    this.previewSrc = this.sanitizer.bypassSecurityTrustResourceUrl(iframeSrc);
  }

  private previewReplacesBeyond(html: string): string {
    // Logo
    html = html.replace(
      new RegExp("\\{\\{\\s?general\\.ecommerceLogo\\s?\\}\\}", "g"),
      this.previewData.options.logo
    );
    // Banners
    html = html.replace(
      new RegExp("\\{\\{\\s?banner\\.image\\s?\\}\\}", "g"),
      this.previewData.options.social
    );
    // Twig variables
    html = html.replace(
      new RegExp("(\\{%\\s[\\S\\s]*?\\s*%\\})", "gm"),
      "<!-- $1 -->"
    );
    // Twig comments
    html = html.replace(
      new RegExp("(\\{#\\s[\\S\\s]*?\\s*#\\})", "gm"),
      "<!-- $1 -->"
    );
    // Twig languageSheets
    let beyondLanguageSheets = this.getBeyondLanguageSheets(html);
    Object.keys(beyondLanguageSheets).forEach(function (key) {
      html = html.replace(
        new RegExp("\\{\\{\\s?languageSheet\\." + key + "\\s?\\}\\}", "g"),
        beyondLanguageSheets[key]
      );
    });

    return html;
  }

  private getBeyondLanguageSheets(html: string) {
    let myRe = /\{%\sset\slanguageSheet\s?=\s?\{([\S\s]*?)\}\s?%\}/g;
    let variablesRaw = [];
    let langItems = [];
    let langItemsData = {};

    while ((variablesRaw = myRe.exec(html)) !== null) {
      if (variablesRaw != null && variablesRaw.length > 1) {
        langItems = langItems.concat(variablesRaw[1].split(/\,\n/));
      }
    }
    langItems = langItems.map((s) => s.trim());

    if (langItems.length) {
      for (let i = 0; i < langItems.length; i++) {
        const langItem = langItems[i];
        let langItemData = /^([a-zA-Z_0-9]*?\s?:\s?)([\S\s]*)$/g.exec(langItem);

        if (langItemData != null && langItemData.length > 1) {
          let trimedValue = langItemData[2].trim();
          let value = trimedValue.substring(1).trim(),
            key = langItemData[1].replace(":", "").trim(),
            lastValChar = value.substr(value.length - 1);

          if (lastValChar === `'` || lastValChar === `"`) {
            value = value.slice(0, -1);
          }

          // Replace variables inter string:
          value = value.replace(
            new RegExp(`[\\"\\']{1}\\s?\\~\\s?[\\"\\']{1}`, "g"), // `' ~ '`
            " "
          );
          value = value.replace(
            new RegExp(`[\\"\\']{1}\\s?\\~\\s?`, "g"), // `' ~ `
            " "
          );
          value = value.replace(
            new RegExp(`\\s?\\~\\s?[\\"\\']{1}`, "g"), // ` ~ '`
            " "
          );

          langItemsData[key] = value;
        }
      }
    }
    return langItemsData;
  }

  private previewReplaces(html: string): string {
    // prevent click empty links
    html = html.replace(
      new RegExp("href=([\"'])(.*?)\\1", "g"),
      'href="javascript:void(0)"'
    );

    html = html.replace(
      new RegExp("[%]{1,2}imagesURL[%]{1,2}logoEmail.(jpg|png|gif|jpeg)", "g"),
      this.previewData.options.logo
    );
    html = html.replace(
      new RegExp("%%BannerImage%%", "g"),
      this.previewData.options.social
    );

    return html;
  }

  // get sanitized src for iframe with email preview
  public getPreviewIframeContent() {
    return this.previewSrc;
  }

  public delCustomHeader(langKey: string, emailId: any) {
    const data = this.getEmailData(langKey, emailId);
    delete data.header;
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public setCustomHeader(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    const emailData = this.getEmailData(langKey, emailId);

    emailData.header = {
      html: langData.emails.header.html,
    };
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public delCustomFooter(langKey: string, emailId: any) {
    const data = this.getEmailData(langKey, emailId);
    delete data.footer;
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }

  public setCustomFooter(langKey: string, emailId: any) {
    const langData = this.getLanguage(langKey);
    const emailData = this.getEmailData(langKey, emailId);
    emailData.footer = {
      html: langData.emails.footer.html,
    };
    this.checkAll();
    this.previewData.id = emailId;
    this.setPreviewIframeContent(langKey);
  }
}
