import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import { OrderDetailsComponent } from "./viewDetails/viewDetails.component";
import { AddClientComponent } from "./add-client/addClient.component";


const homeroutes: Routes = [
  {
    path: "start",
    component: DashboardComponent
  },
  {
    path: "manage-truck",
    component: OrderDetailsComponent
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
