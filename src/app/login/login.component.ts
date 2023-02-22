import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationData } from '../registration/registration.model';
import { RegistrationService } from '../core/services/registration.service';
import { Router } from '@angular/router';

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
    private router: Router
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
            this.router.navigateByUrl('home');
          } else {
            alert('Invalid User');
          }
        });
    }
  }
}
