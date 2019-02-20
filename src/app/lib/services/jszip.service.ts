import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class JszipService {

  public setZip(filesArr: any) {
    const zip = new JSZip();

    filesArr.forEach(file => {
      zip.file(file.fileName, file.content);
    });

    return zip;
  }

  public saveAsZip(zip: any, zipName: string) {
    zip.generateAsync({ type: 'blob' })
      .then(function(content) {
        // see FileSaver.js
        saveAs(content, zipName);
      });
  }

  public saveAsHtml(content: any, fileName: string, type: string) {
    const blob = new Blob([ content ], {
      type: type
    });

    saveAs(blob, fileName);
  }

  public saveAsEmilioGenerator(json: any, fileName: string, type: string) {
    const blob = new Blob([ JSON.stringify(json) ], {
      type: type
    });

    saveAs(blob, fileName);
  }
}
