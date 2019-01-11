import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() previewEmailId: any;
  @Input() previewEmailLangKey: any;

  iframeSrc: any;
  name: string;

  constructor(
    public sanitizer: DomSanitizer,
    private appData: AppData
  ) { }

  ngOnInit() {
    const langId = this.appData.getLangIdByKey(this.previewEmailLangKey);
    const emailId = this.previewEmailId;

    this.name = this.appData.languages[langId].emails.templates[emailId].name;

    this.updatePreview(langId, emailId);
  }

  updatePreview(langId, emailId) {
    const languages = this.appData.languages;

    let selectedHeader = languages[langId].emails.header.html;
    if (languages[langId].emails.templates[emailId].tags.customHeader) {
      selectedHeader = languages[langId].emails.templates[emailId].header.html;
    }

    let selectedFooter = languages[langId].emails.footer.html;
    if (languages[langId].emails.templates[emailId].tags.customFooter) {
      selectedFooter = languages[langId].emails.templates[emailId].footer.html;
    }

    this.iframeSrc =
      'data:text/html;charset=utf-8,' +
      encodeURI('<style>body{margin: 0;}</style>') +
      encodeURI(selectedHeader) +
      encodeURI(languages[langId].emails.templates[emailId].html) +
      encodeURI(selectedFooter);

    // let iframeSrc_ = this.iframeSrc.replace('#', '%23');
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSrc);
  }

}
