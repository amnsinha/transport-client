import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../../../shared/services/driver.service';
import { Driver } from '../../../../models/Driver';

@Component({
  selector: 'app-add-driver',
  templateUrl: './addDriver.component.html',
  styleUrls: ['./addDriver.component.css']
})
export class AddDriverComponent {
  driverForm: FormGroup;
  drivers: Driver[] = [];
  editingDriverId: number | null = null; // Store ID instead of index

  constructor(private fb: FormBuilder, private driverService: DriverService) {
    this.driverForm = this.fb.group({
      driverName: ['', Validators.required],
      driverNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.fetchDrivers();
  }

  fetchDrivers() {
    this.driverService.getAllDrivers().subscribe(
      (data) => (this.drivers = data),
      (error) => console.error('Error fetching drivers:', error)
    );
  }

  submitDriver() {
    if (this.driverForm.invalid) return;
  
    const driverData: Driver = this.editingDriverId 
      ? { id: this.editingDriverId, ...this.driverForm.value } // Include ID for update
      : { ...this.driverForm.value }; // Exclude ID for create
  
    this.driverService.saveDriver(driverData).subscribe(
      (savedDriver) => {
        if (this.editingDriverId !== null) {
          // Update driver in the list
          const index = this.drivers.findIndex((d) => d.id === this.editingDriverId);
          if (index !== -1) this.drivers[index] = savedDriver;
        } else {
          // Add new driver to the list
          this.drivers.push(savedDriver);
        }
        this.resetForm();
      },
      (error) => console.error('Error saving driver:', error)
    );
  }
  
  

  editDriver(driver: Driver) {
    this.editingDriverId = driver.id;
    this.driverForm.patchValue(driver);
  }

  cancelEdit() {
    this.resetForm();
  }

  deleteDriver(driverId: number) {
    this.driverService.deleteDriverById(driverId).subscribe(
      () => {
        this.drivers = this.drivers.filter((d) => d.id !== driverId);
        if (this.editingDriverId === driverId) this.resetForm();
      },
      (error) => console.error('Error deleting driver:', error)
    );
  }

  private resetForm() {
    this.editingDriverId = null;
    this.driverForm.reset();
  }
}
