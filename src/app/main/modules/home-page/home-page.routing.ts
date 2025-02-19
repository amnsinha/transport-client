import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import { AddClientComponent } from "./add-client/addClient.component";
import { AddTruckComponent } from "./add-truck/addTruck.component";
import {OrderComponent} from "./order/order.component";



const homeroutes: Routes = [
  {
    path: "start",
    component: OrderComponent
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
