import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateScriptRoutingModule } from './generate-script-routing.module';
import { GenerateScriptComponent } from './generate-script/generate-script.component';

@NgModule({
  declarations: [GenerateScriptComponent],
  imports: [
    CommonModule,
    GenerateScriptRoutingModule
  ]
})
export class GenerateScriptModule { }
