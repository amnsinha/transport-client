import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base-service";
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class OrganisationService extends BaseService {
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    super();
  }

  createOrganisation(tournament: any) {
    return this.http.post(this.getServiceUrl(`/organisation`), tournament);
  }

  updateOrganisation(tournament: any) {
    return this.http.put(this.getServiceUrl(`/organisation`), tournament);
  }

  deleteOrganisation(tournament: any) {
    return this.http.delete(this.getServiceUrl(`/organisation`), tournament);
  }

  getOrganisationsByUserId(userId: any) {
    return this.http.get(this.getServiceUrl(`/organisation/` + userId));
  }

  getAllGames() {
    return this.http.get(this.getServiceUrl(`/games`));
  }

  getOrganisation(tournament: any) {
    return this.http.get(this.getServiceUrl(`/organisation`), tournament);
  }
}
