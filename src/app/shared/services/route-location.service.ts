import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RouteLocation} from "../../models/RouteLocation";

import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class RouteLocationService {

  private apiUrl = `${environment.apiBaseUrl}/api/route-locations`;

  constructor(private http: HttpClient) {}

  getAllRouteLocations(): Observable<RouteLocation[]> {
    return this.http.get<RouteLocation[]>(this.apiUrl);
  }

  getRouteLocationById(id: number): Observable<RouteLocation> {
    return this.http.get<RouteLocation>(`${this.apiUrl}/${id}`);
  }

  createRouteLocation(routeLocation: RouteLocation): Observable<RouteLocation> {
    return this.http.post<RouteLocation>(this.apiUrl, routeLocation);
  }

  updateRouteLocation(id: number, routeLocation: RouteLocation): Observable<RouteLocation> {
    return this.http.put<RouteLocation>(`${this.apiUrl}/${id}`, routeLocation);
  }

  deleteRouteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
