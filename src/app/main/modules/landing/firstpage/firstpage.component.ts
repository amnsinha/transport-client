import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(public router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    if(this.cookieService.get('user')) {
      this.router.navigate(['/home']);
    }
  }

}
