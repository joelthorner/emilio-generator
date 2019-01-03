import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'eg-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
  styleUrls: ['./sidebar-toggle.component.scss']
})
export class SidebarToggleComponent implements OnInit {

  active = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleCollapseSidebar() {
    if (this.active) {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    } else {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
    }
    this.active = !this.active;
  }
}
