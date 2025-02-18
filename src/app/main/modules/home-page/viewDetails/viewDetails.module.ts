import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from '../viewDetails/viewDetails.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ViewDetailsModule { }
