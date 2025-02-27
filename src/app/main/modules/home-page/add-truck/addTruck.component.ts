import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrucksService } from '../../../../shared/services/trucks.service';
import { Trucks } from '../../../../models/Trucks';

@Component({
  selector: 'app-add-truck',
  templateUrl: './addTruck.component.html',
  styleUrls: ['./addTruck.component.css']
})
export class AddTruckComponent {
  orderForm: FormGroup;
  trucks: Trucks[] = [];
  editingTruckId: number | null = null;
  loading: boolean = false;  // Added for better UX
  selectedTruck: Trucks | null = null; // Stores truck details for view mode

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

  // Fetch all trucks
  fetchTrucks() {
    this.loading = true;
    this.trucksService.getAllTrucks().subscribe({
      next: (data) => {
        this.trucks = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching trucks:', err);
        this.loading = false;
      }
    });
  }

  // Fetch a single truck by ID
  viewTruckDetails(truckId: number) {
    this.trucksService.getTruckById(truckId).subscribe({
      next: (truck) => {
        this.selectedTruck = truck;
      },
      error: (err) => {
        console.error('Error fetching truck details:', err);
      }
    });
  }

  // Create or update truck
  submitOrder() {
    if (this.orderForm.invalid) return;
    const truckData: Trucks = { ...this.orderForm.value };

    if (this.editingTruckId !== null) {
      // Update existing truck
      this.trucksService.updateTruck(this.editingTruckId, truckData).subscribe({
        next: (updatedTruck) => {
          const index = this.trucks.findIndex(truck => truck.id === this.editingTruckId);
          if (index !== -1) {
            this.trucks[index] = updatedTruck;
          }
          this.resetForm();
        },
        error: (err) => {
          console.error('Error updating truck:', err);
        }
      });
    } else {
      // Create new truck
      this.trucksService.createTruck(truckData).subscribe({
        next: (newTruck) => {
          this.trucks.push(newTruck);
          this.resetForm();
        },
        error: (err) => {
          console.error('Error creating truck:', err);
        }
      });
    }
  }

  // Edit a truck
  editOrder(truck: Trucks) {
    this.editingTruckId = truck.id;
    this.orderForm.patchValue(truck);
  }

  // Cancel editing
  cancelEdit() {
    this.resetForm();
  }

  // Delete a truck
  deleteOrder(truckId: number) {
    this.trucksService.deleteTruck(truckId).subscribe({
      next: () => {
        this.trucks = this.trucks.filter(truck => truck.id !== truckId);
        if (this.editingTruckId === truckId) {
          this.resetForm();
        }
      },
      error: (err) => {
        console.error('Error deleting truck:', err);
      }
    });
  }

  // Reset form after submission or cancellation
  private resetForm() {
    this.editingTruckId = null;
    this.selectedTruck = null;
    this.orderForm.reset();
  }
}
