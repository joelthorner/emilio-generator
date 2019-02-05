import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
declare var chrome: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public validUser = false;
  public checkedExtension = false;

  constructor(public router: Router) { }

  canActivate(): boolean | Observable<boolean> {

    if (environment.authForceError) {
      this.validUser = false;
      this.checkedExtension = true;
      return false;
    }
    if (environment.infiniteLoading) {
      this.validUser = false;
      this.checkedExtension = false;
      return false;
    }
    if (!environment.production) {
      this.validUser = true;
      this.checkedExtension = true;
      return true;
    }



    if (!this.validUser && !this.checkedExtension) {

      return new Observable<boolean>((observer) => {

        let accessAllowed: boolean;
        chrome.runtime.sendMessage('jaimlomiojjmdhipacahmpnfefpbbeig', { message: 'version' }, (reply) => {
          if (reply) {
            if (reply.version) {
              if (reply.version.includes('1.') || reply.version.includes('2.') || reply.version.includes('3.')) {
                accessAllowed = true;
              } else {
                accessAllowed = false;
              }
            } else {
              accessAllowed = false;
            }
          } else {
            accessAllowed = false;
          }
        });

        setTimeout(() => {

          this.validUser = accessAllowed;
          this.checkedExtension = true;

          observer.next(accessAllowed);
          observer.complete();

        }, environment.loadingAuth);
      });

    }
  }
}
