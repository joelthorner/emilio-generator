import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eg-credits-card',
  templateUrl: './credits-card.component.html',
  styleUrls: ['./credits-card.component.scss']
})
export class CreditsCardComponent implements OnInit {

  cardTitle = 'Info';
  credits = [
    {
      title: 'Beyond',
      description: 'Ara disponible també versió biom!',
      bottom: 'Ole'
    },
    {
      title: 'AAMH',
      description: 'Associació d\'Afectats per Mails HTML',
      bottom: 'HTML Email Affected Association'
    },
    {
      title: 'Welcome photo',
      description: 'by <a href="https://unsplash.com/@samferrara?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Samuel Ferrara">Samuel Ferrara</a>',
      bottom: 'on Unsplash'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
