import { Component, OnInit, Input } from '@angular/core';
import { AppData } from 'src/app/data/app-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'eg-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() previewEmailId: any;
  @Input() previewEmailLangKey: any;

  public iframeSrc: any;
  public langKey: string;
  public emailId: any;
  public useCommonHeader: boolean;
  public useCommonFooter: boolean;

  constructor(public appData: AppData, public sanitizer: DomSanitizer) {}

  ngOnInit() {

    const languageData = this.appData.getLanguage(this.previewEmailLangKey);

    this.langKey = this.previewEmailLangKey;
    this.emailId = this.previewEmailId;
    this.useCommonHeader = languageData.emails.templates[this.emailId].tags.customHeader;
    this.useCommonFooter = languageData.emails.templates[this.emailId].tags.customFooter;

    this.appData.previewData.id = this.emailId;
    this.appData.previewData.name = this.appData.getEmailData(this.langKey, this.emailId).name;
    this.appData.setPreviewIframeContent(this.langKey);
  }

  getSrc() {
    return this.appData.getPreviewIframeContent();
  }

}
