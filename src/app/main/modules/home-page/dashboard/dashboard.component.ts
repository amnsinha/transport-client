import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../../shared/services/order.service";
import {Order} from "../../../../models/Order";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderForm: FormGroup;
  originOptions: string[] = ['Origin 1', 'Origin 2', 'Origin 3']; // Replace with your options
  destinationOptions: string[] = ['Destination 1', 'Destination 2', 'Destination 3']; // Replace with your options
  statusOptions: string[] = ['Pending', 'Completed', 'In Progress']; // Replace with your options
  approvedByOptions: string[] = ['Admin', 'Manager', 'Supervisor']; // Replace with your options

  constructor(private fb: FormBuilder,
              private orderService: OrderService) {
    this.orderForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      orderId: ['', Validators.required],
      clientName: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      freightWeight: ['', [Validators.required, Validators.min(0)]],
      assignedTruck: ['', Validators.required],
      assignedDriver: ['', Validators.required],
      status: ['', Validators.required],
      commissionAmount: ['', Validators.required],
      approvedBy: ['', Validators.required],
      clearance: ['', Validators.required],
      incharge: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const newOrder: Order = this.orderForm.value;
      this.orderService.createOrder(newOrder).subscribe(response => {
        console.log('Order created successfully:', response);
        // Handle successful order creation (e.g., redirect or display a success message)
      }, error => {
        console.error('Error creating order:', error);
        // Handle error (e.g., display an error message)
      });
    }
  }
}
