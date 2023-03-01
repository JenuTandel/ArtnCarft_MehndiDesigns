import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { SuccessfullyMessageComponent } from 'src/app/shared/components/successfully-message/successfully-message.component';
import { mehndiBookingForm } from '../../models/mehndi-booking-form.model';

@Injectable()
export class MehndiBookingFormPrsenterService {
  public add$: Observable<mehndiBookingForm>;
  private add: Subject<mehndiBookingForm>;

  constructor(
    private formBuilder: FormBuilder,
    private overlayService: OverlayService
  ) {
    this.add$ = new Observable();
    this.add = new Subject();
    this.add$ = this.add.asObservable();
  }
  public buildBookingForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  public saveBookingDetails(bookingForm: FormGroup): void {
    if (bookingForm.valid) {
      this.add.next(bookingForm.value);
      this.overlayService.closeDialog.next(true);
      this.overlayService.openDialog(SuccessfullyMessageComponent);
    } else {
    }
  }
}
