import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/data/app-data';
import { SearchService } from 'src/app/lib/services/search.service';

@Component({
  selector: 'eg-language-navbar',
  templateUrl: './language-navbar.component.html',
  styleUrls: ['./language-navbar.component.scss']
})
export class LanguageNavbarComponent implements OnInit {

  public langKey: string;
  public searchValue: string;

  constructor(
    private appData: AppData,
    private route: ActivatedRoute,
    private search: SearchService
    ) {

  }

  ngOnInit() {
    this.search.currentSearch.subscribe(searchValue => this.searchValue = searchValue);
    this.langKey = this.route.snapshot.params['langKey'];
  }

  downloadZipLanguage(event: any) {
    event.preventDefault();
    this.appData.generateLanguageZip(this.langKey);
  }

  searchChange(event: any) {
    event = event.toLowerCase().trim();
    this.search.changeSearch(event);
  }

}
