import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManagementComponent } from './addOrder.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrderManagementComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OrderManagementModule { }
