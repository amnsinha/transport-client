import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {TournamentService} from "../../../service/tournament.service";
import {Tournament} from "../../../../models/tournament";

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {

  tournamentDetails: any = [];

  constructor(public router: Router, private route: ActivatedRoute,
              private tournamentService: TournamentService) {

  }

  ngOnInit(): void {
    const urlTemp = window.location.href.split('/');
    this.tournamentService.getTournamentDetailsByTournamentId(urlTemp[5])
      .subscribe((res: Tournament) => {
        console.log('res', res);
        this.tournamentDetails = res;
      });


  }
}
