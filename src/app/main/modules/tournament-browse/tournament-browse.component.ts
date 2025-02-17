import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../service/tournament.service";
import {Tournament} from "../../../models/tournament";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-tournament-browse',
  templateUrl: './tournament-browse.component.html',
  styleUrls: ['./tournament-browse.component.css']
})
export class TournamentBrowseComponent implements OnInit {


  public tournament: Tournament[] = [];

  constructor(private tournamentService: TournamentService, public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);


    this.tournamentService.getAllTournament().subscribe((res: any) => {
        console.log('res', res);
        this.tournament = res;
      }
    );
  }

}
