import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trucks} from "../../models/Trucks";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  private apiUrl = `${environment.apiBaseUrl}/api/trucks`;

  constructor(private http: HttpClient) {}

  getAllTrucks(): Observable<Trucks[]> {
    return this.http.get<Trucks[]>(this.apiUrl);
  }

  getTruckById(id: number): Observable<Trucks> {
    return this.http.get<Trucks>(`${this.apiUrl}/${id}`);
  }

  createTruck(truck: Trucks): Observable<Trucks> {
    return this.http.post<Trucks>(this.apiUrl, truck);
  }

  updateTruck(id: number, truck: Trucks): Observable<Trucks> {
    return this.http.put<Trucks>(`${this.apiUrl}/${id}`, truck);
  }

  deleteTruck(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
