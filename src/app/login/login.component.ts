import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationData } from '../registration/registration.model';
import { RegistrationService } from '../core/services/registration.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';
import { AuthService } from '../core/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup('');
    this.isSubmitted = false;
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
      // this.registrationService
      //   .getUser()
      //   .subscribe((res: RegistrationData[]) => {
      //     let user = res.find(
      //       (data) =>
      //         data.contactNumber ===
      //           this.loginForm.controls['contactNumber'].value &&
      //         data.password === this.loginForm.controls['password'].value
      //     );
      //     console.log(user);

      //     if (user) {
      //       this.router.navigateByUrl('home');
      //       this.loginService.islogin.next(true);
      //     } else {
      //       alert('Invalid User');
      //     }
      //   });
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        // const token = this.DecodeToken(res);
        const token = res.tokenId;
        localStorage.setItem('userToken', token);
        this.loginService.islogin.next(true);
        this.router.navigateByUrl('home');
      });
    }
  }
}
