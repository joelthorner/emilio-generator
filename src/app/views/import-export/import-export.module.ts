import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportComponent } from './import-export/import-export.component';
import { ImportExportRoutingModule } from './import-export-routing.module';

@NgModule({
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    ImportExportRoutingModule
  ]
})
export class ImportExportModule { }
