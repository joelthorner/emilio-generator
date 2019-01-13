import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-language-navbar',
  templateUrl: './language-navbar.component.html',
  styleUrls: ['./language-navbar.component.scss']
})
export class LanguageNavbarComponent implements OnInit {

  public langKey: string;

  constructor(
    private appData: AppData,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
  }

  downloadZipLanguage(event) {
    event.preventDefault();
    this.appData.generateLanguageZip(this.langKey);
  }

}
