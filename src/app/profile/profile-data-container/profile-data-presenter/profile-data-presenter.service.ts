import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { RegistrationData } from 'src/app/registration/registration.model';

@Injectable()
export class ProfileDataPresenterService {
  constructor(
    private formBuilder: FormBuilder,
    private dataCommunications: DataCommunications
  ) {}
  public buildMyProfileForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      password: [''],
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
    });
  }
  public bindControlValue(myProfileForm: FormGroup): FormGroup {
    this.dataCommunications.idData$.subscribe((data) => {
      console.log(data);
      if (data) {
        myProfileForm.patchValue(data);
        console.log(myProfileForm);
      }
    });
    return myProfileForm;
  }
}
