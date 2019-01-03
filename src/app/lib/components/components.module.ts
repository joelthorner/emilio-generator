import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanguagesListComponent } from './sidebar/languages-list/languages-list.component';
import { SidebarToggleComponent } from './navbar/sidebar-toggle/sidebar-toggle.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LanguagesListComponent,
    SidebarToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
  ]
})
export class ComponentsModule { }
