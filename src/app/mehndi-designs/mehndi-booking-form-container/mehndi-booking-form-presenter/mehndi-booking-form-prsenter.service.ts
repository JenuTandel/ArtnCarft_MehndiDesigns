import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MehndiBookingFormPrsenterService {
  constructor(private formBuilder: FormBuilder) {}
  public buildBookingForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
}
