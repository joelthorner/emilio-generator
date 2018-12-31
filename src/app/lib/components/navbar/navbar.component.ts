import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Emilio generator';

  constructor() { }

  ngOnInit() {
  }

}
