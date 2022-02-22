import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppData } from "src/app/data/app-data";
import { SearchService } from "src/app/lib/services/search.service";
import { BeyondService } from "src/app/lib/services/beyond.service";
declare var $: any;

@Component({
  selector: "eg-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit {
  public langKey: string;
  public langData: any;
  public objectKeys = Object.keys;

  public previewEmail: any;
  public searchValue: string;
  public beyondValue: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appData: AppData,
    private search: SearchService,
    private beyond: BeyondService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.search.currentSearch.subscribe(
      (searchValue) => (this.searchValue = searchValue)
    );
    this.beyond.currentBeyond.subscribe((beyondValue) => {
      this.beyondValue = beyondValue;
      this._ngOnInit();
    });

    // Sorry for this, the next project will build with https://ng-bootstrap.github.io/
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  _ngOnInit() {
    this.appData.changeLanguageSource(this.beyondValue);
    this.langKey = this.route.snapshot.params["langKey"];
    this.langData = this.appData.getLanguage(this.langKey);
    this.previewEmail = this.langData.emails.templates[1];
  }

  refreshPreview(event: any, emailTemplateId: any, freeClick: boolean = false) {
    if (event.target.classList.contains("collapsed") || freeClick) {
      this.appData.previewData.id = emailTemplateId;
      this.appData.previewData.name = this.appData.getEmailData(
        this.langKey,
        emailTemplateId
      ).name;
      this.appData.setPreviewIframeContent(this.langKey);
    }
  }

  evalModifyHeader(event: any, emailId: any) {
    event.preventDefault();

    if (this.langData.emails.templates[emailId].tags.customHeader) {
      // remove header
      const confirmBool = confirm("Are you sure?");
      if (confirmBool) {
        this.appData.delCustomHeader(this.langKey, emailId);
      }
    } else {
      // add header
      this.appData.setCustomHeader(this.langKey, emailId);
    }
  }

  evalModifyFooter(event: any, emailId: any) {
    event.preventDefault();

    if (this.langData.emails.templates[emailId].tags.customFooter) {
      // remove footer
      const confirmBool = confirm("Are you sure?");
      if (confirmBool) {
        this.appData.delCustomFooter(this.langKey, emailId);
      }
    } else {
      // add footer
      this.appData.setCustomFooter(this.langKey, emailId);
    }
  }

  findedLangItem(item: any, type: string, scrollEl: HTMLElement) {
    let finded = false;

    if (this.searchValue.length > 2) {
      if (typeof item === "string") {
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

      if (finded) {
        scrollEl.scrollTop = 0;
      }
    }

    if (type === "class") {
      return finded ? "finded" : "";
    } else if (type === "order") {
      return finded ? 1 : 10;
    }
  }
}
