import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {BaseService} from "../../shared/services/base-service";
import {Tournament} from "../../models/tournament";
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class TournamentService extends BaseService {
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    super();
  }

  getAllTournamentOfaUser() {
    return this.http.get<User[]>(this.getServiceUrl(`/tournament/` + this.cookieService.get('username')));
  }

  getTournamentDetailsByTournamentId(tournamentId: any) {
    return this.http.get<Tournament>(this.getServiceUrl(`/tournament/tournamentId/` + tournamentId));
  }

  getAllTournament() {
    return this.http.get<Tournament[]>(this.getServiceUrl(`/tournament/games`));
  }

  createTournament(tournament: Tournament) {
    return this.http.post(this.getServiceUrl(`/tournament`), tournament);
  }

  addPlayerInformation(form: any) {
    return this.http.post(this.getServiceUrl(`/player/save`), form);
  }


  delete(id: number) {
    return this.http.delete(`users/`);
  }
}
