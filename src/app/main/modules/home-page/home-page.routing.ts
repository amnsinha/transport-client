import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import { AddClientComponent } from "./add-client/addClient.component";
import { AddTruckComponent } from "./add-truck/addTruck.component";
// import { OrderDetailsComponent } from "./viewDetails/viewDetails.component";

const homeroutes: Routes = [
  {
    path: "start",
    component: DashboardComponent
  },
  {
    path: "manage-truck",
    component: AddTruckComponent
  },
  {
    path: "add-client",
    component: AddClientComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeroutes)
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
