import { Component, OnInit, Renderer2 } from '@angular/core';
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
    public appData: AppData
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
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
}
