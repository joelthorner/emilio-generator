import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CreditsCardComponent } from './credits-card/credits-card.component';
import { ChangelogCardComponent } from './changelog-card/changelog-card.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    CreditsCardComponent,
    ChangelogCardComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: true,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
