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
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private driverService: DriverService) {
    this.driverForm = this.fb.group({
      driverName: ['', Validators.required],
      driverNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.fetchDrivers();
  }

  fetchDrivers() {
    this.driverService.getAllDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  submitDriver() {
    if (this.driverForm.invalid) return;

    const driverData: Omit<Driver, 'id'> = { ...this.driverForm.value };

    if (this.editingIndex !== null) {
      // Update existing driver
      const driverId = this.drivers[this.editingIndex].id;
      this.driverService
        .saveDriver({ id: driverId, ...driverData }) // Ensure 'id' is only included for updates
        .subscribe((updatedDriver) => {
          this.drivers[this.editingIndex!] = updatedDriver;
          this.editingIndex = null;
          this.driverForm.reset();
        });
    } else {
      // Create new driver
      this.driverService.saveDriver(driverData as Driver).subscribe((newDriver) => {
        this.drivers.push(newDriver);
        this.driverForm.reset();
      });
    }
  }

  editDriver(index: number) {
    this.editingIndex = index;
    this.driverForm.patchValue(this.drivers[index]);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.driverForm.reset();
  }

  deleteDriver(index: number) {
    const driverId = this.drivers[index].id;
    this.driverService.deleteDriverById(driverId).subscribe(() => {
      this.drivers.splice(index, 1);
      if (this.editingIndex === index) {
        this.cancelEdit();
      }
    });
  }
}
