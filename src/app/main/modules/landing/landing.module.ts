import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {landingRoutes} from './landing.routing';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../../shared/services/authentication.service";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ToastModule} from "primeng/toast";
import {SharedModule} from "../../../shared/shared.module";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    FirstpageComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true, // <-- PLAY WITH IT
      extend: true // <-- PLAY WITH IT
    }),
    ReactiveFormsModule,
    RouterModule.forChild(landingRoutes),
  ],
  providers: [UserService, AuthenticationService, TranslateService]
})

export class LandingModule {
}
