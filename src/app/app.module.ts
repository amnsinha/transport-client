import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./main/modules/landing/landing.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HomePageModule} from "./main/modules/home-page/home-page.module";
import {TournamentBrowseModule} from "./main/modules/tournament-browse/tournament-browse.module";
import {TournamentPublicInfoModule} from "./main/modules/tournament-public-info/tournament-public-info.module";
import {ToastMessageService} from "./shared/services/toast-message.service";
import {MessageService} from "primeng/api";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {SharedModule} from "./shared/shared.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    SharedModule,
    TournamentBrowseModule,
    TournamentPublicInfoModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ToastMessageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}