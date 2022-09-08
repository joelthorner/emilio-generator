import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/data/app-data';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eg-modal-preview-settings',
  templateUrl: './modal-preview-settings.component.html',
  styleUrls: ['./modal-preview-settings.component.scss']
})
export class ModalPreviewSettingsComponent implements OnInit {

  public langKey: string;

  public logoSrc: any;
  public logoSrcBase64: string;
  public logoName = '';
  public logoErrorMsg = '';

  public socialSrc: any;
  public socialSrcBase64: string;
  public socialName = '';
  public socialErrorMsg = '';

  constructor(
    public appData: AppData,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];

    this.logoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.appData.previewData.options.logo);
    this.logoSrcBase64 = this.appData.previewData.options.logo;

    this.socialSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.appData.previewData.options.social);
    this.socialSrcBase64 = this.appData.previewData.options.social;
  }

  saveAll() {
    this.appData.previewData.options.logo = this.logoSrcBase64;
    this.appData.previewData.options.social = this.socialSrcBase64;
    this.appData.setPreviewIframeContent(this.langKey);
  }

  selectImageLogic(event: any, file: string) {
    if (event.target.files && event.target.files[0]) {
      let reader: any;
      reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      const mb = event.target.files[0].size / 1024 / 1024;
      const isImage = event.target.files[0].type.match('(image/jpeg|image/png)');
      const self = this;

      reader.onload = function (imgsrc: any) {
        if (isImage) {
          if (mb <= 1) {
            self[file + 'Src'] = self.sanitizer.bypassSecurityTrustResourceUrl(imgsrc.target.result);
            self[file + 'SrcBase64'] = imgsrc.target.result;
            self[file + 'Name'] = event.target.files[0].name;
            self[file + 'ErrorMsg'] = '';
          } else {
            self[file + 'ErrorMsg'] = 'Max file size 1MB!';
          }
        } else {
          self[file + 'ErrorMsg'] = 'Only jpg / jpeg or png files!';
        }
      };
    }
  }

  onSelectLogoFile(event: any) {
    this.selectImageLogic(event, 'logo');
  }

  onSelectSocialFile(event: any) {
    this.selectImageLogic(event, 'social');
  }

}
