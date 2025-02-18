import {Component, OnInit} from '@angular/core';
import {Order} from '../../../../models/Order';
import {OrderService} from "../../../../shared/services/order.service"; // Import the Order interface

@Component({
    selector: 'app-add-order',
    templateUrl: './addOrder.component.html',
    styleUrls: ['./addOrder.component.css']
})
export class OrderManagementComponent implements OnInit {
    orders: Order[] = [];
    selectedOrder?: Order;

    clients = [
        {name: 'Client 1'},
        {name: 'Client 2'},
        {name: 'Client 3'},
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


    constructor(private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders(): void {
        this.orderService.getAllOrders().subscribe(
            (data) => this.orders = data,
            (error) => console.error('Error fetching orders', error)
        );
    }

    getOrderById(id: number): void {
        this.orderService.getOrderById(id).subscribe(
            (data) => this.selectedOrder = data,
            (error) => console.error('Error fetching order', error)
        );
    }

    createOrder(order: Order): void {
        this.orderService.createOrder(order).subscribe(
            (data) => {
                this.orders.push(data);
                console.log('Order created successfully', data);
            },

            (error) => console.error('Error creating order', error)
        );
    }

    updateOrder(id: number, order: Order): void {
        this.orderService.updateOrder(id, order).subscribe(
            (data) => {
                this.orders = this.orders.map(o => o.id === id ? data : o);
                console.log('Order updated successfully', data);
            },
            (error) => console.error('Error updating order', error)
        );
    }

    deleteOrder(id: number): void {
        this.orderService.deleteOrder(id).subscribe(
            () => {
                this.orders = this.orders.filter(o => o.id !== id);
                console.log('Order deleted successfully');
            },
            (error) => console.error('Error deleting order', error)
        );
    }


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
        const orderWithId = {...this.newOrder, id: this.allOrders.length + 1};
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
