import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationData } from './registration.model';
import { RegistrationService } from '../core/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public step: number;
  public isSubmitted: boolean;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = new FormGroup('');
    this.step = 1;
    this.isSubmitted = false;
  }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')],
      ],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
    });
  }

  onRegister() {
    if (this.registrationForm.valid) {
      this.isSubmitted = true;
      this.registrationService
        .AddUser(this.registrationForm.value)
        .subscribe((res: RegistrationData) => {});
    }

    this.router.navigateByUrl('login');
  }

  onNext(index: number) {
    if (
      index == 1 &&
      this.registrationForm.controls['name'].valid &&
      this.registrationForm.controls['password'].valid &&
      this.registrationForm.controls['contactNumber'].valid
    ) {
      this.step++;
    } else if (
      index == 2 &&
      this.registrationForm.controls['address'].valid &&
      this.registrationForm.controls['city'].valid &&
      this.registrationForm.controls['pincode'].valid
    ) {
      this.step++;
    }
  }

  onPrevious() {
    this.step--;
  }

  onStepBullet(index: number) {
    if (index == 1) {
      this.step = 1;
    }
    if (
      index == 2 &&
      this.registrationForm.controls['name'].valid &&
      this.registrationForm.controls['password'].valid &&
      this.registrationForm.controls['contactNumber'].valid
    ) {
      this.step = 2;
    }
    if (
      index == 3 &&
      this.registrationForm.controls['address'].valid &&
      this.registrationForm.controls['city'].valid &&
      this.registrationForm.controls['pincode'].valid
    ) {
      this.step = 3;
    }
  }
}
