import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'eg-access-loading',
  templateUrl: './access-loading.component.html',
  styleUrls: ['./access-loading.component.scss']
})
export class AccessLoadingComponent implements OnInit {

  public title = environment.title;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
