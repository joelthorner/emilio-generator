import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions/instructions.component';
import { InstructionsRoutingModule } from './instructions-routing.module';

@NgModule({
  declarations: [InstructionsComponent],
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ]
})
export class InstructionsModule { }
