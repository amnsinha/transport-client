import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page.routing";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardModule} from "primeng/card";
import {HeaderComponent} from "../../../shared/component/header/header.component";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {EditorModule} from "primeng/editor";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from '@angular/common/http';
import { AddClientComponent } from "./add-client/addClient.component";
import { OrderDetailsComponent } from "./viewDetails/viewDetails.component";
import { AddTruckComponent } from "./add-truck/addTruck.component";
import { OrderManagementComponent } from "./order-details/addOrder.component";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent
    , DashboardComponent,AddClientComponent,OrderDetailsComponent,AddTruckComponent,OrderManagementComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    FileUploadModule,
    EditorModule,
    HomePageRoutingModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    TabViewModule,
    InputTextModule,
     MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatTabsModule,
  ]
})
export class HomePageModule {
}
