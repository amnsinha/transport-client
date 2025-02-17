import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.css']
})
export class AddClientComponent {
  currentTab: string = 'add'; // Default tab is 'Add Client'

  orders: any[] = []; // This will store the client data

  newClient = {
    partyName: '',
    ownerName: '',
    contactNo: '',
     };

  switchTab(tab: string) {
    this.currentTab = tab;
  }

  addClient() {
    // Add the new client to the orders array
    this.orders.push({
      date: new Date().toLocaleDateString(),
      ...this.newClient
    });

    // Reset the form
    this.newClient = {
      partyName: '',
      ownerName: '',
      contactNo: '',
     
    };
  }
}
