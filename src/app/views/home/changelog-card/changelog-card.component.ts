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

    octokit.authenticate({
      type: 'oauth',
      key: 'a2617b4a55282dfdbef1',
      secret: '995753279547b58ff77098acee74d2c04a4788db'
    });

    octokit.repos.listReleases({
      owner: 'joelthorner',
      repo: 'emilio-generator',
      per_page: '3',
      page: '1'
    }).then(result => {

      if (result.data) {
        for (const item of result.data) {
          item.body = item.body
          .replace('Changelog', '')
          .replace('changelog', '')
          .replace(/-{6,}/i, '');
        }

        this.changeLogItems = result.data;
      }
    }).catch(function(error) {

    });
  }

}
