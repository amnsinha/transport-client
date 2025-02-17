import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  log_out() {
    this.cookieService.delete('username');
    this.router.navigate(['']);
  }

}
