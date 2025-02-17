import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './viewDetails.component.html',
  styleUrls: ['./viewDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {
  currentTab: 'current' | 'all' = 'current'; // Tracks the selected tab
  orders: any[] = []; // Store the order data
  allOrders: any[] = []; // Store all the orders for the "All Orders" tab
  currentOrders: any[] = []; // Store current orders for the "Current Orders" tab

  constructor() { }

  ngOnInit(): void {
    // Mock data for demonstration purposes
    this.allOrders = [
      {
        date: '2025-02-17',
        truckNo: 'TRK123',
        contactNo: '1234567890',
        destination: 'City A',
        weight: '10 tons',
        freight: '1000 PMT',
        loadingFrom: 'Warehouse 1',
        clearance: 'Cleared',
        approved: 'Yes',
        commissionAmt: '500',
        partyNameNo: 'Party A - 001'
      },
      {
        date: '2025-02-16',
        truckNo: 'TRK124',
        contactNo: '0987654321',
        destination: 'City B',
        weight: '15 tons',
        freight: '1200 PMT',
        loadingFrom: 'Warehouse 2',
        clearance: 'Pending',
        approved: 'No',
        commissionAmt: '600',
        partyNameNo: 'Party B - 002'
      },
      // Add more orders here as needed
    ];

    // Filter current orders based on status or another field (for example)
    this.filterOrders();
  }

  // Method to switch between tabs
  switchTab(tab: 'current' | 'all'): void {
    this.currentTab = tab;
    this.filterOrders(); // Filter orders based on the selected tab
  }

  // Filter orders based on the selected tab
  filterOrders(): void {
    if (this.currentTab === 'current') {
      this.currentOrders = this.allOrders.filter(order => order.approved === 'Yes');
    } else {
      this.currentOrders = this.allOrders; // Show all orders
    }
    console.log('Current Orders:', this.currentOrders); // Debugging the filtered orders
  }
}
