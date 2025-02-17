import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  log_out() {
    this.cookieService.delete('username');
    this.router.navigate(['']);
  }

}
