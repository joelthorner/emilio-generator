import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/data/app-data';
import { Router } from '@angular/router';

@Component({
  selector: 'eg-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {

  public objectKeys = Object.keys;
  public listItems = {};

  constructor(public appData: AppData, public router: Router) {
    this.listItems = this.appData.languages;
  }

  ngOnInit() {
  }

}
