import { Component } from '@angular/core';
import { Order } from '../../../../models/Order'; // Import the Order interface

@Component({
  selector: 'app-add-order',
  templateUrl: './addOrder.component.html',
  styleUrls: ['./addOrder.component.css']
})
export class OrderManagementComponent {
  clients = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    // Add more clients here
  ];
  locations = [
    'New York',
    'Los Angeles',
    'loooooss',
    'Chicago',
    'Miami',
    'San Francisco',
    // Add more locations here
  ];
  trucks = [
    'Truck 1',
    'Truck 2',
    'Truck 3',
    'Truck 4',
    'Truck 5',
    // Add more truck names here
  ];

  currentTab: string = 'add'; // Default tab is 'Add Order'

  allOrders: Order[] = []; // This will store the order data

  filteredClients = this.clients;
  // filteredLocations = { origin: this.locations, destination: this.locations };
  // filteredTrucks = this.trucks;

  newOrder: Order = {
    id: 0,
    orderId: 0,
    clientName: '',
    origin: '',
    destination: '',
    freightWeight: 0,
    assignedTruck: '',
    assignedDriver: '',
    status: 'Pending', // Default status is 'Pending'
    commissionAmount: '',
    approvedBy: '',
    clearance: '',
    incharge: '',
  };

  // Function to switch tabs
  switchTab(tab: string) {
    this.currentTab = tab;
  }
 filterClients(query: string) {
    this.filteredClients = this.clients.filter(client =>
      client.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Function to add a new order
  addOrder() {
    const orderWithId = { ...this.newOrder, id: this.allOrders.length + 1 };
    this.allOrders.push(orderWithId); // Add the new order to the orders array

    // Reset the form after submission
    this.newOrder = {
      id: 0,
      orderId: 0,
      clientName: '',
      origin: '',
      destination: '',
      freightWeight: 0,
      assignedTruck: '',
      assignedDriver: '',
      status: 'Pending',
      commissionAmount: '',
      approvedBy: '',
      clearance: '',
      incharge: '',
    };
  }
}
