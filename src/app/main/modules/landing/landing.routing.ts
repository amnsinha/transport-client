import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ContactsComponent} from "./contacts/contacts.component";

export const landingRoutes: Routes = [
  {path: "", component: FirstpageComponent},
  {path: "login", component: LoginComponent},
  {path: "contact", component: ContactsComponent},
  {path: "verifyEmail/:id/token/:token", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "reset-password/:id", component: ResetPasswordComponent}
];

