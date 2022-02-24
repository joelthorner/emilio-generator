import { Component, OnInit } from "@angular/core";
import { AppData } from "src/app/data/app-data";
import * as moment from "moment";
import { JszipService } from "src/app/lib/services/jszip.service";
import { BeyondService } from "src/app/lib/services/beyond.service";

@Component({
  selector: "eg-import-export",
  templateUrl: "./import-export.component.html",
  styleUrls: ["./import-export.component.scss"],
})
export class ImportExportComponent implements OnInit {
  public objectKeys = Object.keys;
  public selectLangs: any;

  public exportLang = "1";
  public exportFileNameVersion = 0;
  public exportFileName = "";

  public importSrc: any;
  public importSrcBase64: string;
  public importFileName = "";
  public importErrorMsg = "";
  public importSuccessMsg = "";
  public importSuccessData = [];

  public beyondValue: boolean;

  constructor(
    public appData: AppData,
    private jszip: JszipService,
    private beyond: BeyondService
  ) {}

  ngOnInit() {
    this.beyond.currentBeyond.subscribe(
      (beyondValue) => (this.beyondValue = beyondValue)
    );
    this.selectLangs = this.appData.languages;
  }

  exportAction() {
    this.exportFileNameVersion++;
    const version = this.exportFileNameVersion;
    const key = "[" + this.appData.languages[this.exportLang].key + "]";
    const fileName =
      this.exportFileName + "__v" + version + "__" + key + ".emilio-generator";

    this.jszip.saveAsEmilioGenerator(
      this.appData.languages[this.exportLang],
      fileName,
      "text/plain;charset=utf-8"
    );
  }

  onSelectImportFile(event: any) {
    this.importSuccessData = [];
    if (event.target.files && event.target.files[0]) {
      let reader: any;
      reader = new FileReader();

      const mb = event.target.files[0].size / 1024 / 1024;
      const correctFormat =
        event.target.files[0].name.match(".emilio-generator");
      const start = 0;
      const stop = event.target.files[0].size - 1;

      this.importFileName = event.target.files[0].name;

      const blob = event.target.files[0].slice(start, stop + 1);
      reader.readAsText(blob);

      const self = this;

      reader.onloadend = function (eventLoadEnd: any) {
        if (
          correctFormat &&
          eventLoadEnd.target.readyState === FileReader.DONE
        ) {
          const newDataObj = JSON.parse(eventLoadEnd.target.result);

          const langId = self.appData.getLangIdByKey(newDataObj.key);
          self.appData.languages[langId] = newDataObj;
          self.importSuccessMsg = "File imported successfully.";
          self.importSuccessData.push(
            "<b>Language</b> [" + newDataObj.name + "]"
          );
          self.importSuccessData.push(
            `<b>System</b> ${this.beyondValue ? "beyond" : "fluid"}`
          );
          self.importSuccessData.push("<b>File version</b> [2.x]");
          self.importSuccessData.push(
            "<b>Emails ids</b> [" +
              Object.keys(newDataObj.emails.templates) +
              "]"
          );

          self.importErrorMsg = "";
        } else {
          self.importErrorMsg = "Only .emilio-generator files!";
        }
      };
    }
  }
}
