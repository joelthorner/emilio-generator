import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LanguagesListComponent } from './sidebar/languages-list/languages-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LanguagesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
