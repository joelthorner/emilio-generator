import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateScriptComponent } from './generate-script/generate-script.component';

const routes: Routes = [
  {
    path: ':langKey',
    component: GenerateScriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateScriptRoutingModule { }
