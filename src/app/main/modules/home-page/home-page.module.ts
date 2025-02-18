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
    CalendarModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    TabViewModule,
    InputTextModule,

  ]
})
export class HomePageModule {
}
