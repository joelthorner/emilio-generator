import { Component, OnInit } from '@angular/core';
import { ReleasesGithubApiService } from 'src/app/lib/services/releases-github-api.service';

@Component({
  selector: 'eg-changelog-card',
  templateUrl: './changelog-card.component.html',
  styleUrls: ['./changelog-card.component.scss']
})
export class ChangelogCardComponent implements OnInit {

  cardTitle = 'Changelog';
  changeLogItems = [];

  constructor(private service: ReleasesGithubApiService) {}

  ngOnInit() {
    this.service.getLastsReleases().subscribe(result => {
      const arr = [];
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          arr.push(result[key]);
        }
      }

      if (result) {
        for (const item of arr) {
          item.body = item.body
            .replace('Changelog', '')
            .replace('changelog', '')
            .replace(/-{6,}/i, '');
        }

        this.changeLogItems = arr;
      }
    }, error => {
      console.log(error); // for development only.
    });
  }

}
