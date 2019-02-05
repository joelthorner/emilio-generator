import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLoadingComponent } from './access-loading/access-loading.component';

@NgModule({
  declarations: [AccessLoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AccessLoadingComponent
  ]
})
export class AccessLoadingModule { }
