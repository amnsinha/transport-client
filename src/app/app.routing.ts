import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./main/modules/landing/landing.component";
import {HomePageComponent} from "./main/modules/home-page/home-page.component";
import {TournamentBrowseComponent} from "./main/modules/tournament-browse/tournament-browse.component";
import {TournamentPublicInfoComponent} from "./main/modules/tournament-public-info/tournament-public-info.component";

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
      ,
      {
        path: "browse",
        component: TournamentBrowseComponent,
        loadChildren: () => import(`./main/modules/tournament-browse/tournament-browse.module`).then(
          module => module.TournamentBrowseModule
        )
      },
      {
        path: "view-tournament",
        component: TournamentPublicInfoComponent,
        loadChildren: () => import(`./main/modules/tournament-public-info/tournament-public-info.module`).then(
          module => module.TournamentPublicInfoModule
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
