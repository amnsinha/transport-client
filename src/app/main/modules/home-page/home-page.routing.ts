import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import { CreateOrganizationComponent } from './create-organization/create-organization.component';


const homeroutes: Routes = [
  {
    path: "dash",
    component: DashboardComponent
  },
  {
    path: "create",
    component: CreateOrganizationComponent
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
