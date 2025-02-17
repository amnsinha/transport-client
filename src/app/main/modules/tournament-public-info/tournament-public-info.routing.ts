import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ViewTournamentComponent} from "./view-tournament/view-tournament.component";
import {TournamentRegisterComponent} from "./tournament-register/tournament-register.component";

const tournamentPublicInfoRouting: Routes = [
  {
    path: ":id/view", component: ViewTournamentComponent
  },
  {
    path: ":id/register", component: TournamentRegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tournamentPublicInfoRouting)
  ],
  exports: [RouterModule],
})
export class TournamentPublicInfoRouting {
}
