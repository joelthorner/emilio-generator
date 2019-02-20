import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportExportComponent } from './import-export/import-export.component';
import { ImportExportRoutingModule } from './import-export-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImportExportComponent],
  imports: [
    CommonModule,
    ImportExportRoutingModule,
    FormsModule
  ]
})
export class ImportExportModule { }
