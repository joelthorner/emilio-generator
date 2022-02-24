import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/data/app-data';
import { SearchService } from 'src/app/lib/services/search.service';
import { BeyondService } from 'src/app/lib/services/beyond.service';

@Component({
  selector: 'eg-language-navbar',
  templateUrl: './language-navbar.component.html',
  styleUrls: ['./language-navbar.component.scss']
})
export class LanguageNavbarComponent implements OnInit {

  public langKey: string;
  public searchValue: string;
  public beyondValue: boolean;

  constructor(
    private appData: AppData,
    private route: ActivatedRoute,
    private search: SearchService,
    private beyond: BeyondService
    ) {

  }

  ngOnInit() {
    this.search.currentSearch.subscribe(searchValue => this.searchValue = searchValue);
    this.beyond.currentBeyond.subscribe(beyondValue => this.beyondValue = beyondValue);
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

  beyondChange(event: any) {
    this.beyond.changeBeyond(event);
  }

  clearSearch() {
    this.search.changeSearch('');
  }

}
