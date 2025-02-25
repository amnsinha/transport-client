import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Party} from "../../models/Party";


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = 'http://localhost:8080/api/parties';

  constructor(private http: HttpClient) {}

  getAllParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.apiUrl);
  }

  getPartyById(id: number): Observable<Party> {
    return this.http.get<Party>(`${this.apiUrl}/${id}`);
  }

  saveParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.apiUrl,party);
  }

  updateParty(id: number, party: Party): Observable<Party> {
    return this.http.put<Party>(`${this.apiUrl}/${id}`, party);
  }

  deleteParty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
