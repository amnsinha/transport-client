import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./main/modules/landing/landing.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomePageModule} from "./main/modules/home-page/home-page.module";
import {ToastMessageService} from "./shared/services/toast-message.service";
import {MessageService} from "primeng/api";


import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ToastMessageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
