import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  collapsed = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

}
