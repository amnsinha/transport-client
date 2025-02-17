import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";

import {ViewTournamentComponent} from "./view-tournament/view-tournament.component";
import {TournamentPublicInfoRouting} from "./tournament-public-info.routing";

import {TournamentRegisterComponent} from "./tournament-register/tournament-register.component";
import {BrowseHeaderComponent} from "../../../shared/component/browse-header/browse-header.component";
import {TournamentPublicInfoComponent} from "./tournament-public-info.component";
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import {BrowserHeaderModule} from "../../../shared/component/browse-header/browser-header.module";


@NgModule({
  declarations: [ViewTournamentComponent, TournamentPublicInfoComponent,
    TournamentRegisterComponent],
  imports: [
    CommonModule,
    BrowserHeaderModule,
    TournamentPublicInfoRouting,
    CardModule,
    TabViewModule,
    FormsModule
  ]
})
export class TournamentPublicInfoModule {
}
