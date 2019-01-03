import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
declare var require: any;

@Component({
  selector: 'eg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = environment.title;
  version = require( '../../../../../package.json').version;

  constructor() { }

  ngOnInit() {
  }

}
