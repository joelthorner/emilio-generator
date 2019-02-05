import { Component } from '@angular/core';
import { AuthService } from './lib/services/auth.service';

@Component({
  selector: 'eg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
