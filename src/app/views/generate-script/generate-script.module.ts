import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { GenerateScriptRoutingModule } from './generate-script-routing.module';
import { GenerateScriptComponent } from './generate-script/generate-script.component';

@NgModule({
  declarations: [GenerateScriptComponent],
  imports: [
    CommonModule,
    GenerateScriptRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class GenerateScriptModule { }
