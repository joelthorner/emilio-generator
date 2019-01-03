import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'eg-changelog-card',
  templateUrl: './changelog-card.component.html',
  styleUrls: ['./changelog-card.component.scss']
})
export class ChangelogCardComponent implements OnInit {

  cardTitle = 'Changelog';
  changeLogItems = [];

  constructor() { }

  ngOnInit() {
    const octokit = require('@octokit/rest')();
    octokit.repos.listReleases({
      owner: 'joelthorner',
      repo: 'emilio-generator',
      per_page: '3',
      page: '1'
    }).then(result => {
      for (const item of result.data) {
        item.body = item.body
          .replace('Changelog', '')
          .replace('changelog', '')
          .replace(/-{6,}/i, '');
      }
      console.log(result.data);

      this.changeLogItems = result.data;
    });
  }

}
