import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { AuthService } from './lib/services/auth.service';
import { AccessDeniedComponent } from './views/access-denied/access-denied/access-denied.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
