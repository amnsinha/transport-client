import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class LoginService {
  constructor(router: Router, private cookieService: CookieService) {
  }


  checkUserLoginValidation(): boolean {
    if (this.cookieService.get('username')) {
      console.log("checked");
      console.log(this.cookieService.get('username'));
      // logged in so return true
      return true;
    } else {
      return false;
    }
  }
}
