import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard/dashboard.component";


const homeroutes: Routes = [
  {
    path: "start",
    component: DashboardComponent
  },
  {
    path: "manage-truck",
    component: DashboardComponent
  },
  {
    path: "add-client",
    component: DashboardComponent
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
