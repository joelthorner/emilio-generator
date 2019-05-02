import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReleasesGithubApiService {

  private username: string;
  private clientid = 'a2617b4a55282dfdbef1';
  private clientsecret = '995753279547b58ff77098acee74d2c04a4788db';


  constructor(private http: HttpClient) {
    this.username = 'joelthorner';
  }

  getLastsReleases() {
    return this.http.get(`https://api.github.com/repos/${this.username}/emilio-generator/releases?client_id=${this.clientid}&client_secret=${this.clientsecret}&per_page=3`);
  }
}
