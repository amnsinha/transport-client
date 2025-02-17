import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./main/modules/landing/landing.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomePageModule} from "./main/modules/home-page/home-page.module";
import {TournamentBrowseModule} from "./main/modules/tournament-browse/tournament-browse.module";
import {TournamentPublicInfoModule} from "./main/modules/tournament-public-info/tournament-public-info.module";
import {ToastMessageService} from "./shared/services/toast-message.service";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    TournamentBrowseModule,
    TournamentPublicInfoModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ToastMessageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
