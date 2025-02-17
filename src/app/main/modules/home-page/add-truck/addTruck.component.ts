import { Component } from '@angular/core';
import { Trucks } from '../../../../models/Trucks'; // Import the interface

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent {
  currentTab: string = 'add';  // Default to 'Add Truck' tab
  newTruck: Trucks = {
    id: 0,
    truckNumber: '',
    registrationNumber: '',
    model: '',
    capacity: 0,
    fuelType: '',
    status: '',
    ownerNumber: '',
    ownerName: '',
    driverName: '',
    driverNumber: '',
    fright: '',
    active: true,
    documents: {},
    nextMaintenanceDate: new Date()
  };  // Initial new truck object
  allTrucks: Trucks[] = [];  // Array to store all trucks

  // Switch between tabs
  switchTab(tab: string): void {
    this.currentTab = tab;
  }

  // Add new truck to the list (you can extend it to an API call later)
  addTruck(): void {
    this.newTruck.id = this.allTrucks.length + 1;  // Assign a new ID based on the current length
    this.allTrucks.push({ ...this.newTruck });  // Add the new truck to the array
    this.resetForm();  // Reset form after submission
    this.switchTab('all');  // Switch to 'All Trucks' tab after adding
  }

  // Reset form fields
  resetForm(): void {
    this.newTruck = {
      id: 0,
      truckNumber: '',
      registrationNumber: '',
      model: '',
      capacity: 0,
      fuelType: '',
      status: '',
      ownerNumber: '',
      ownerName: '',
      driverName: '',
      driverNumber: '',
      fright: '',
      active: true,
      documents: {},
      nextMaintenanceDate: new Date()
    };
  }
}
