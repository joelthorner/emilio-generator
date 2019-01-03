import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {

  objectKeys = Object.keys;
  listItems = {};

  constructor(private appData: AppData) {
    this.listItems = appData.languages;
  }

  ngOnInit() {
  }

}
