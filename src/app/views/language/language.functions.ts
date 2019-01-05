import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageFunctions {

  public downloadZipLanguage(event) {
    event.preventDefault();
    console.log(event);
  }

}
