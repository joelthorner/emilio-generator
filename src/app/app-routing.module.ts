import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { AuthService } from './lib/services/auth.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthService],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'instructions',
        loadChildren: './views/instructions/instructions.module#InstructionsModule'
      },
      {
        path: 'language',
        loadChildren: './views/language/language.module#LanguageModule'
      },
      {
        path: 'generate-script',
        loadChildren: './views/generate-script/generate-script.module#GenerateScriptModule'
      },
      {
        path: 'import-export',
        loadChildren: './views/import-export/import-export.module#ImportExportModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
