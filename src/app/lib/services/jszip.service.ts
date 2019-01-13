import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class JszipService {

  public setZip(filesArr) {
    const zip = new JSZip();

    filesArr.forEach(file => {
      zip.file(file.fileName, file.content);
    });

    return zip;
  }

  public saveAsZip(zip, zipName) {
    zip.generateAsync({ type: 'blob' })
      .then(function(content) {
        // see FileSaver.js
        saveAs(content, zipName);
      });
  }
}
