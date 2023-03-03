import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationData } from '../registration/registration.model';
import { RegistrationService } from '../core/services/registration.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';
import { AuthService } from '../core/services/auth.service';
import jwt_decode from 'jwt-decode';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean;
  public token: string;
  private secretkey: string;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup('');
    this.isSubmitted = false;
    this.secretkey = 'thisismysecretkey';
    this.token = '';
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')],
      ],
    });
  }

  DecodeToken(token: string): string {
    return jwt_decode(token);
  }
  onLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.registrationService
        .getUser()
        .subscribe((res: RegistrationData[]) => {
          let user = res.find(
            (data) =>
              data.contactNumber ===
                this.loginForm.controls['contactNumber'].value &&
              data.password === this.loginForm.controls['password'].value
          );
          console.log(user);

          if (user) {
            this.auth();
          } else {
            alert('Invalid User');
          }
        });
    }
  }
  async auth() {
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      this.token = CryptoJS.AES.decrypt(res, this.secretkey)
        .toString(CryptoJS.enc.Utf8)
        .replace(/['"]+/g, '');
    });
    console.log(this.token);

    await localStorage.setItem('user', this.token);
    await this.loginService.islogin.next(true);
    await this.router.navigateByUrl('home');
  }
}
