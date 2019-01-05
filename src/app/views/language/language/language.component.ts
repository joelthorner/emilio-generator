import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public langKey: string;
  public langData: any;
  public objectKeys = Object.keys;

  public previewEmail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appData: AppData
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
    this.langData = this.appData.getLanguage(this.langKey);
    this.previewEmail = this.langData.emails.templates[1];
  }

}
