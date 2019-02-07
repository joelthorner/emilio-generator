import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSource = new BehaviorSubject('');
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  changeSearch(search: string) {
    search = search.toLowerCase().trim();

    this.searchSource.next(search);
  }
}
