import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TournamentBrowseComponent} from "./tournament-browse.component";

const tournamentBrowseRouting: Routes = [
  {
    path: "browse-tournament",
    component: TournamentBrowseComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tournamentBrowseRouting)
  ],
  exports: [RouterModule],
})
export class TournamentBrowseRouting {
}
