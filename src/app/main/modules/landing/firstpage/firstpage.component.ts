import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(public router: Router, private cookieService: CookieService, private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  ngOnInit(): void {
    if(this.cookieService.get('user')) {
      this.router.navigate(['/home']);
    }
  }

}
