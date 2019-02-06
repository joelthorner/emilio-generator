import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from 'src/app/data/app-data';
import { SearchService } from 'src/app/lib/services/search.service';


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
  public searchValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appData: AppData,
    private search: SearchService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.search.currentSearch.subscribe(searchValue => this.searchValue = searchValue);
    this.langKey = this.route.snapshot.params['langKey'];
    this.langData = this.appData.getLanguage(this.langKey);
    this.previewEmail = this.langData.emails.templates[1];
  }

  refreshPreview(event: any, emailTemplateId: any) {
    if (event.target.classList.contains('collapsed')) {
      this.appData.previewData.id = emailTemplateId;
      this.appData.previewData.name = this.appData.getEmailData(this.langKey, emailTemplateId).name;
      this.appData.setPreviewIframeContent(this.langKey);
    }
  }

  evalModifyHeader(event: any, emailId: any) {
    event.preventDefault();

    if (this.langData.emails.templates[emailId].tags.customHeader) {
      // remove header
      this.appData.delCustomHeader(this.langKey, emailId);

    } else {
      // add header
      this.appData.setCustomHeader(this.langKey, emailId);
    }
  }
  evalModifyFooter(event: any, emailId: any) {
    event.preventDefault();

    if (this.langData.emails.templates[emailId].tags.customFooter) {
      // remove footer
      this.appData.delCustomFooter(this.langKey, emailId);

    } else {
      // add footer
      this.appData.setCustomFooter(this.langKey, emailId);
    }
  }

  findedLangItem(item: any, type: string) {
    let finded = false;

    if (this.searchValue.length > 2) {
      if (typeof item === 'string') {
        if (item.toLowerCase().trim().includes(this.searchValue)) {
          finded = true;
        }
      } else {
        if (item.name.toLowerCase().trim().includes(this.searchValue)) {
          finded = true;
        }
        if (item.subject.toLowerCase().trim().includes(this.searchValue)) {
          finded = true;
        }
      }
    }


    if (type === 'class') {
      return finded ? 'finded' : '';
    } else if (type === 'order') {
      return finded ? 1 : 10;
    }
  }
}
