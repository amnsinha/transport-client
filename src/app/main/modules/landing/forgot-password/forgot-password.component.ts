import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loading = false;
  changePasswordForm: FormGroup | any;
  submitted = false;


  constructor(  private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.authenticationService.logout();
    this.changePasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
     
    });
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  forgetpassword() {
    console.log(this.changePasswordForm.value);
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.changepassword(this.changePasswordForm.value.username)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.router.navigate(['/login']);
          } else {
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
        });
  }

}
