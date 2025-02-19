import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrucksService } from '../../../../shared/services/trucks.service';
import { Trucks } from '../../../../models/Trucks';

@Component({
  selector: 'app-app-truck',
  templateUrl: './addTruck.component.html',
  styleUrls: ['./addTruck.component.css']
})
export class AddTruckComponent {
  orderForm: FormGroup;
  trucks: Trucks[] = [];
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private trucksService: TrucksService) {
    this.orderForm = this.fb.group({
      truckNumber: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      model: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      fuelType: ['', Validators.required],
      status: ['', Validators.required],
      ownerNumber: ['', Validators.required],
      ownerName: ['', Validators.required],
      driverName: ['', Validators.required],
      driverNumber: ['', Validators.required],
      fright: ['', Validators.required],
      active: [false],
      nextMaintenanceDate: ['', Validators.required]
    });
    this.fetchTrucks();
  }

  fetchTrucks() {
    this.trucksService.getAllTrucks().subscribe((data) => {
      this.trucks = data;
    });
  }

  submitOrder() {
    if (this.orderForm.invalid) return;

    const truckData: Trucks = { ...this.orderForm.value };

    if (this.editingIndex !== null) {
      this.trucksService.updateTruck(this.trucks[this.editingIndex].id, truckData).subscribe((updatedTruck) => {
        this.trucks[this.editingIndex!] = updatedTruck;
        this.editingIndex = null;
        this.orderForm.reset();
      });
    } else {
      this.trucksService.createTruck(truckData).subscribe((newTruck) => {
        this.trucks.push(newTruck);
        this.orderForm.reset();
      });
    }
  }

  editOrder(index: number) {
    this.editingIndex = index;
    this.orderForm.patchValue(this.trucks[index]);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.orderForm.reset();
  }

  deleteOrder(index: number) {
    const truckId = this.trucks[index].id;
    this.trucksService.deleteTruck(truckId).subscribe(() => {
      this.trucks.splice(index, 1);
      if (this.editingIndex === index) {
        this.cancelEdit();
      }
    });
  }
}