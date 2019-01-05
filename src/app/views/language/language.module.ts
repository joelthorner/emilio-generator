import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageComponent } from './language/language.component';
import { LanguageNavbarComponent } from './language-navbar/language-navbar.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [LanguageComponent, LanguageNavbarComponent, EditorComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    AceEditorModule
  ]
})
export class LanguageModule { }
