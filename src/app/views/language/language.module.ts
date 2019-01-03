import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageComponent } from './language/language.component';
import { LanguageNavbarComponent } from './language-navbar/language-navbar.component';

@NgModule({
  declarations: [LanguageComponent, LanguageNavbarComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule
  ]
})
export class LanguageModule { }
