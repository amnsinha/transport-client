import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from 'ngx-cookie-service';
import {CryptUtils} from "../../../../shared/utils/base64-utils";
import {ToastMessageService} from "../../../../shared/services/toast-message.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup | any;
  submitted = false;
  showVerifyBanner = false;

  constructor(
    private toastMessageService: ToastMessageService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService
  ) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params:any) => {
      if (params && params.id) {
        this.activateEmailParams(params.id, params.token);
      }
    });



    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    // console.log(this.loginForm.value);
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.router.navigate(['/home']);
      return;
    }

    this.loading = true;
    this.router.navigate(['/home']);
    // this.authenticationService.login(this.loginForm.value.username, btoa(this.loginForm.value.password))
    //   .subscribe(
    //     data => {
    //       console.log('res', data);
    //       if (data.status === '200') {
    //         console.log(data);
    //         this.cookieService.set('username', data.user.username);
    //         this.cookieService.set('userId', data.user.uniqueUserId);
    //         this.router.navigate(['/home']);
    //       } else {
    //         alert("User does not exist. Please register first");
    //         this.loading = false;
    //       }
    //     },
    //     error => {
    //       this.loading = false;
    //     });
  }

  private activateEmailParams(id: any, token: any) {
    this.authenticationService.verifyEmail(id, token)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.showVerifyBanner = true;
          }
        });
  }
}

