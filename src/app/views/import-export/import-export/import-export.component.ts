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
    // this.beyond.currentBeyond.subscribe(
    //   (beyondValue) => (this.beyondValue = beyondValue)
    // );
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
      reader.onloadend = (eventLoadEnd: any) => {
        if (
          correctFormat &&
          eventLoadEnd.target.readyState === FileReader.DONE
        ) {
          const newDataObj = JSON.parse(eventLoadEnd.target.result);

          const langId = this.appData.getLangIdByKey(newDataObj.key);
          const isBeyond = newDataObj.system === "beyond";
          this.beyond.changeBeyond(isBeyond);

          this.appData.languages[langId] = newDataObj;
          this.importSuccessMsg = "File imported successfully.";
          this.importSuccessData.push(
            "<b>Language</b> [" + newDataObj.name + "]"
          );
          this.importSuccessData.push(
            `<b>System</b> ${isBeyond ? "beyond" : "fluid"}`
          );
          this.importSuccessData.push("<b>File version</b> [2.x]");
          this.importSuccessData.push(
            "<b>Emails ids</b> [" +
              Object.keys(newDataObj.emails.templates) +
              "]"
          );

          this.importErrorMsg = "";
        } else {
          this.importErrorMsg = "Only .emilio-generator files!";
        }
      };
    }
  }
}
