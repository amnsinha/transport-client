import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";
import {TournamentBrowseComponent} from "./tournament-browse.component";
import {TournamentBrowseRouting} from "./tournament-browse.routing";
import {BrowserHeaderModule} from "../../../shared/component/browse-header/browser-header.module";


@NgModule({
  declarations: [TournamentBrowseComponent],
  imports: [
    CommonModule,
    CardModule,
    BrowserHeaderModule,
    TournamentBrowseRouting,
  ]
})

export class TournamentBrowseModule {
}
