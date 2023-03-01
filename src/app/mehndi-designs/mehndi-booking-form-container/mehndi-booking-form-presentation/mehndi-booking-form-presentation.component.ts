import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { SuccessfullyMessageComponent } from 'src/app/shared/components/successfully-message/successfully-message.component';
import { mehndiBookingForm } from '../../models/mehndi-booking-form.model';
import { MehndiBookingFormPrsenterService } from '../mehndi-booking-form-presenter/mehndi-booking-form-prsenter.service';

@Component({
  selector: 'app-mehndi-booking-form-presentation',
  templateUrl: './mehndi-booking-form-presentation.component.html',
  styleUrls: ['./mehndi-booking-form-presentation.component.scss'],
  viewProviders: [MehndiBookingFormPrsenterService],
})
export class MehndiBookingFormPresentationComponent implements OnInit {
  @Output() addBookingData: EventEmitter<mehndiBookingForm>;
  public bookingForm: FormGroup;
  public isSubmitted: boolean;
  constructor(
    private mehndiBookingFormPrsenterService: MehndiBookingFormPrsenterService
  ) {
    this.bookingForm = this.mehndiBookingFormPrsenterService.buildBookingForm();
    this.isSubmitted = false;
    this.addBookingData = new EventEmitter();
  }
  ngOnInit(): void {
    this.mehndiBookingFormPrsenterService.add$.subscribe(
      (res: mehndiBookingForm) => {
        this.addBookingData.emit(res);
      }
    );
  }

  onBookNow() {
    this.isSubmitted = true;
    this.mehndiBookingFormPrsenterService.saveBookingDetails(this.bookingForm);
  }
}
