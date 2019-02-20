import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/data/app-data';
import * as moment from 'moment';
import { JszipService } from 'src/app/lib/services/jszip.service';

@Component({
  selector: 'eg-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  public objectKeys = Object.keys;
  public selectLangs: any;

  public exportLang = '1';
  public exportFileNameVersion = 0;
  public exportFileName = '';

  public importSrc: any;
  public importSrcBase64: string;
  public importFileName = '';
  public importErrorMsg = '';
  public importSuccessMsg = '';
  public importSuccessData = [];

  constructor(public appData: AppData, private jszip: JszipService) { }

  ngOnInit() {
    this.selectLangs = this.appData.languages;
  }

  exportAction() {
    this.exportFileNameVersion++;
    const version = this.exportFileNameVersion;
    const key = '[' + this.appData.languages[this.exportLang].key + ']';
    const fileName =  this.exportFileName + '__v' + version + '__' + key + '.emilio-generator';

    this.jszip.saveAsEmilioGenerator(this.appData.languages[this.exportLang], fileName, 'text/plain;charset=utf-8');
  }

  onSelectImportFile(event: any) {
    this.importSuccessData = [];
    if (event.target.files && event.target.files[0]) {
      let reader: any;
      reader = new FileReader();

      const mb = event.target.files[0].size / 1024 / 1024;
      const correctFormat = event.target.files[0].name.match('.emilio-generator');
      const start = 0;
      const stop = event.target.files[0].size - 1;

      this.importFileName = event.target.files[0].name;

      const blob = event.target.files[0].slice(start, stop + 1);
      reader.readAsText(blob);

      const self = this;

      reader.onloadend = function (eventLoadEnd: any) {
        if (correctFormat && eventLoadEnd.target.readyState === FileReader.DONE) {
          const newDataObj = JSON.parse(eventLoadEnd.target.result);

          if (newDataObj.hasOwnProperty('key')) {
            const langId = self.appData.getLangIdByKey(newDataObj.key);
            self.appData.languages[langId] = newDataObj;
            self.importSuccessMsg = 'File imported successfully.';
            self.importSuccessData.push('<b>Language</b> [' + newDataObj.name + ']');
            self.importSuccessData.push('<b>File version</b> [2.x]');
            self.importSuccessData.push('<b>Emails ids</b> [' + Object.keys(newDataObj.emails.templates) + ']');
          } else {
            const oldVersionLegacy = self.importFileName.match(/\[[A-Z]{2,3}\]/);

            if (oldVersionLegacy) {
              const langKey = oldVersionLegacy[0].replace('[', '').replace(']', '').toLowerCase();
              const langIdLegacy = self.appData.getLangIdByKey(langKey);
              self.legacyImport(langIdLegacy, langKey, newDataObj);
            }
          }
          self.importErrorMsg = '';
        } else {
          self.importErrorMsg = 'Only .emilio-generator files!';
        }
      };
    }
  }

  legacyImport(id: number, langKey: string, obj: any) {

    this.importSuccessData.push('<b>Language</b> [' + langKey + ']');
    this.importSuccessData.push('<b>File version</b> [1.x]');

    const successEmailId = [];

    this.appData.languages[id].emails.header.html = obj.header;
    this.appData.languages[id].emails.footer.html = obj.footer;

    for (const emailId in this.appData.languages[id].emails.templates) {
      if (obj.mails.hasOwnProperty(emailId)) {
        successEmailId.push(emailId);
        const thisDataEmail = this.appData.languages[id].emails.templates[emailId];

        // update subject and body
        thisDataEmail.subject = obj.mails[emailId].subject;
        thisDataEmail.html = obj.mails[emailId].html;

        // update custom header
        if (obj.mails[emailId].hasOwnProperty('header')) {
          if (!thisDataEmail.hasOwnProperty('header')) {
            thisDataEmail.header = { html: obj.mails[emailId].header };
          } else {
            thisDataEmail.header.html = obj.mails[emailId].header;
          }
        } else {
          this.appData.delCustomHeader(langKey, emailId);
        }

        // update custom footer
        if (obj.mails[emailId].hasOwnProperty('footer')) {
          if (!thisDataEmail.hasOwnProperty('footer')) {
            thisDataEmail.footer = { html: obj.mails[emailId].footer };
          } else {
            thisDataEmail.footer.html = obj.mails[emailId].footer;
          }
        } else {
          this.appData.delCustomFooter(langKey, emailId);
        }

        // save changes
        this.appData.languages[id].emails.templates[emailId] = thisDataEmail;
      }
    }
    this.importSuccessData.push('<b>Emails ids</b> [' + successEmailId.toString() + ']');
    this.importSuccessMsg = 'File imported successfully.';
    this.appData.checkAll();
  }

}
