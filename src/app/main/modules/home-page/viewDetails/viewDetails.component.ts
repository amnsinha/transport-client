import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  templateUrl: './viewDetails.component.html',
  styleUrls: ['./viewDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderForm!: FormGroup;

  originOptions: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
  destinationOptions: string[] = ['San Francisco', 'Seattle', 'Dallas', 'Boston', 'Denver'];
  statusOptions: string[] = ['Pending', 'In Progress', 'Completed'];
  approvedByOptions: string[] = ['Manager A', 'Manager B', 'Manager C'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      clientName: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      freightWeight: ['', [Validators.required, Validators.min(1)]],
      assignedTruck: ['', Validators.required],
      assignedDriver: ['', Validators.required],
      status: ['', Validators.required],
      commissionAmount: ['', [Validators.required, Validators.min(0)]],
      approvedBy: ['', Validators.required],
      clearance: ['', Validators.required],
      incharge: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Order Created:', this.orderForm.value);
      this.orderForm.reset(); // Reset form after submission
    }
  }
}
