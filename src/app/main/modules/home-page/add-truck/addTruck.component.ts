import { Component } from '@angular/core';

@Component({
  selector: 'app-add-truck',
  templateUrl: './addTruck.component.html',
  styleUrls: ['./addTruck.component.css']
})
export class AddTruckComponent {
  currentTab: string = 'add'; // Default tab is 'Add Truck'

  trucks: any[] = []; // This will store the truck data

  newTruck = {
    truckNumber: '',
    registrationNumber: '',
    model: '',
    capacity: null,
    fuelType: '',
    status: '',
    ownerNumber: '',
    ownerName: '',
    driverName: '',
    driverNumber: '',
    fright: '',
    active: false,
    nextMaintenanceDate: null
  };

  switchTab(tab: string) {
    this.currentTab = tab;
  }

  addTruck() {
    // Add the new truck to the trucks array
    this.trucks.push({
      date: new Date().toLocaleDateString(),
      ...this.newTruck
    });

    // Reset the form
    this.newTruck = {
      truckNumber: '',
      registrationNumber: '',
      model: '',
      capacity: null,
      fuelType: '',
      status: '',
      ownerNumber: '',
      ownerName: '',
      driverName: '',
      driverNumber: '',
      fright: '',
      active: false,
      nextMaintenanceDate: null
    };
  }
}
