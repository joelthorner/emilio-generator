import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreditsCardComponent } from './credits-card/credits-card.component';

@NgModule({
  declarations: [HomeComponent, JumbotronComponent, CreditsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
