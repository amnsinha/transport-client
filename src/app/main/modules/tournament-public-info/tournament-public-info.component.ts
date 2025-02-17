import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {Tournament} from "../../../models/tournament";
import {TournamentService} from "../../service/tournament.service";

@Component({
  selector: 'app-tournament-public-info',
  templateUrl: './tournament-public-info.component.html',
  styleUrls: ['./tournament-public-info.component.css']
})
export class TournamentPublicInfoComponent implements OnInit {
  tournamentId: number = 0;
  url: any = [];
  tournamentDetails: any = [];

  constructor(public router: Router, private route: ActivatedRoute,
              private tournamentService: TournamentService) {

  }

  ngOnInit(): void {
    this.tournamentId = this.route.snapshot.params['id'];
    this.url = window.location.href.split('/');
    this.tournamentId = this.url[5];

    this.tournamentService.getTournamentDetailsByTournamentId(this.tournamentId)
      .subscribe((res: Tournament) => {
        console.log('res', res);
        this.tournamentDetails = res;
      });

  }

}
