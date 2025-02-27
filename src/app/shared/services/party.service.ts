import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Party} from "../../models/Party";
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = `${environment.apiBaseUrl}/api/parties`;

  constructor(private http: HttpClient) {}

  getAllParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.apiUrl);
  }

  getPartyById(id: number): Observable<Party> {
    return this.http.get<Party>(`${this.apiUrl}/${id}`);
  }

  createParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.apiUrl, party);
  }

  updateParty(id: number, party: Party): Observable<Party> {
    return this.http.put<Party>(`${this.apiUrl}/${id}`, party);
  }

  deleteParty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
