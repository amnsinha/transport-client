import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tournament-register',
  templateUrl: './tournament-register.component.html',
  styleUrls: ['./tournament-register.component.css']
})
export class TournamentRegisterComponent implements OnInit {
  email:string="";

  constructor(private cookieService: CookieService) {
    this.email = this.cookieService.get( 'username');
  }

  ngOnInit(): void {
  }

}
