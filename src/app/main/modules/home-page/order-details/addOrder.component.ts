import { Component } from '@angular/core';
import { Order } from '../../../../models/Order';

@Component({
  selector: 'app-order-details',
  templateUrl: './addOrder.component.html',
  styleUrls: ['./addOrder.component.css']
})
export class OrderManagementComponent {
  currentTab: string = 'add'; // Default tab
  newOrder: Order = this.getEmptyOrder();
  allOrders: Order[] = [];

  // Function to switch tabs
  switchTab(tab: string) {
    this.currentTab = tab;
  }

  // Function to add a new order
  addOrder() {
    const orderWithId = { ...this.newOrder, id: this.allOrders.length + 1 };
    this.allOrders.push(orderWithId);
    this.newOrder = this.getEmptyOrder(); // Reset form after submission
  }

  // Helper function to return an empty order structure
  private getEmptyOrder(): Order {
    return {
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
