import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UserService} from '../../../service/user.service';
import {CookieService} from 'ngx-cookie-service';
import {MessageService} from 'primeng/api';
import {ToastMessageService} from "../../../../shared/services/toast-message.service";

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  loading = false;
  submitted = false;
  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(
    private toastMessageService: ToastMessageService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService,
    private messageService: MessageService
  ) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    if (this.cookieService.get('username')) {
      this.router.navigate(['/home']);
    }
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    this.submitted = true;


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    if (!this.regularExpression.test(this.registerForm.value.password)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'warn',
        detail: 'Password should contain atleast one number and one special character'
      });

      this.toastMessageService.showMessage("Password should contain atleast one number and one special character", "warn");
      return;
    }

    this.loading = true;

    this.registerForm.value.password = btoa(this.registerForm.value.password);
    this.userService.register(this.registerForm.value).pipe(first())
      .subscribe(
        (data: any) => {
          if (data.status === "302") {
            this.loading = false;
            this.messageService.add({severity: 'warn', summary: 'warn', detail: data.message});
          }
          if (data.status === "200") {
            this.messageService.add({severity: 'success', summary: 'success', detail: data.message});
            alert(data.message);
            this.router.navigate(['/login']);
          } else {
            this.messageService.add({severity: 'warn', summary: 'warn', detail: data.message});
          }
        },
        (error: any) => {
          this.loading = false;
        });
  }
}
