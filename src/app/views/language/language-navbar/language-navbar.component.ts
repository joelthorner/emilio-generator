import { Component, OnInit } from '@angular/core';
import { LanguageFunctions } from '../language.functions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eg-language-navbar',
  templateUrl: './language-navbar.component.html',
  styleUrls: ['./language-navbar.component.scss']
})
export class LanguageNavbarComponent implements OnInit {

  public langKey: string;

  constructor(private languageFunctions: LanguageFunctions, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
  }

  downloadZipLanguage(event) {
    this.languageFunctions.downloadZipLanguage(event);
  }

}
