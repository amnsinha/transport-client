import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./main/modules/landing/landing.component";
import {HomePageComponent} from "./main/modules/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: LandingComponent,
        loadChildren: () => import(`./main/modules/landing/landing.module`).then(
          module => module.LandingModule
        )
      },
      {
        path: "home",
        component: HomePageComponent,
        loadChildren: () => import(`./main/modules/home-page/home-page.module`).then(
          module => module.HomePageModule
        )
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
