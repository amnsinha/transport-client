import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Driver} from "../../models/Driver";
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private apiUrl = `${environment.apiBaseUrl}/api/drivers`;// Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Create or Update Driver
  saveDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.apiUrl, driver); // POST for create
  }

  // Retrieve all Drivers
  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.apiUrl); // GET to fetch all drivers
  }

  // Retrieve Driver by ID
  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/${id}`); // GET to fetch driver by ID
  }

  // Retrieve Driver by Driver Number
  getDriverByDriverNumber(driverNumber: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/driver-number/${driverNumber}`); // Custom GET for driver by number
  }

  // Delete Driver by ID
  deleteDriverById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // DELETE to remove driver by ID
  }
}
