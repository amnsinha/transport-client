import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-browse-header',
  templateUrl: './browse-header.component.html',
  styleUrls: ['./browse-header.component.css']
})
export class BrowseHeaderComponent implements OnInit {

  loginCheck: boolean = false;

  constructor(public router: Router,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    if (!this.cookieService.get('user')) {
    } else
      this.loginCheck = true;
  }

  log_out() {
    this.cookieService.delete('username');
    this.router.navigate(['']);
  }

}
