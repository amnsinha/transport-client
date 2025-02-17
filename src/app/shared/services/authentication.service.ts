import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from './base-service';
import {CookieService} from 'ngx-cookie-service';

const BASE = '/user';
const LOGIN = BASE + '/login';
const VERIFY_EMAIL = BASE + '/verifyEmail/{userId}/token/{token}';
const userId = '{userId}';
const TOKEN = '{token}';
const FORGETPASSWORD = BASE + '/forgetpassword';
const RESETPASSWORD = BASE + '/resetpassword';

@Injectable()
export class AuthenticationService extends BaseService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
    super();
  }


  public login(username: string, password: string): Observable<any> {
    const params = new HttpParams().set('username', username).set('password', password);
    const url: string = this.getServiceUrl(LOGIN);
    return this.http.get<any>(url, {headers: this.getHttpHeaders(), params});
  }

  public verifyEmail(id: string, token: string): Observable<any> {
    const url: string = this.getServiceUrl(VERIFY_EMAIL
      .replace(userId, id)
      .replace(TOKEN, token));
    return this.http.get<any>(url, {headers: this.getHttpHeaders()});
  }

  public changepassword(username: string): Observable<any> {
    const params = new HttpParams().set('username', username);
    const url: string = this.getServiceUrl(FORGETPASSWORD);
    return this.http.get<any>(url, {headers: this.getHttpHeaders(), params});
  }

  public resetpassword(password: string, newpassword: string): Observable<any> {
    const params = new HttpParams().set('password', password).set('newpassword', newpassword);
    const url: string = this.getServiceUrl(RESETPASSWORD);
    return this.http.get<any>(url, {headers: this.getHttpHeaders(), params});
  }

}
