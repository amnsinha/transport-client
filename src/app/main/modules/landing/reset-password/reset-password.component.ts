import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  loading = false;
  resetPasswordForm: FormGroup | any;
  submitted = false;
  regularExpression: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  id: any;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  resetpassword() {

    this.submitted = true;
    if (this.resetPasswordForm.invalid)
      return;

    if (this.resetPasswordForm.value.password !== this.resetPasswordForm.value.repassword) {
      alert("password not matched");
      return;
    }

    if (!this.regularExpression.test(this.resetPasswordForm.value.password)) {
      alert("password should contain atleast one number and one special character");
      return;
    }

    this.loading = true;
    this.authenticationService.resetpassword(this.resetPasswordForm.value.password, this.resetPasswordForm.value.repassword)
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
