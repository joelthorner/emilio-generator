import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './lib/icons/icons.module';
import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { AppData } from './data/app-data';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AccessLoadingModule } from './views/access-loading/access-loading.module';
import { AuthService } from './lib/services/auth.service';
import { InstructionsModule } from './views/instructions/instructions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ComponentsModule,
    HomeModule,
    LoadingBarRouterModule,
    AccessLoadingModule
  ],
  providers: [
    AppData,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
