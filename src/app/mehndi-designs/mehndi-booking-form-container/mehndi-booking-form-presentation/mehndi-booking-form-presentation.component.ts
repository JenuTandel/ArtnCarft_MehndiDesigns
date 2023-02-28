import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MehndiBookingFormPrsenterService } from '../mehndi-booking-form-presenter/mehndi-booking-form-prsenter.service';

@Component({
  selector: 'app-mehndi-booking-form-presentation',
  templateUrl: './mehndi-booking-form-presentation.component.html',
  styleUrls: ['./mehndi-booking-form-presentation.component.scss'],
})
export class MehndiBookingFormPresentationComponent implements OnInit {
  public bookingForm: FormGroup;
  constructor(
    private mehndiBookingFormPrsenterService: MehndiBookingFormPrsenterService
  ) {
    this.bookingForm = this.mehndiBookingFormPrsenterService.buildBookingForm();
  }
  ngOnInit(): void {}
}
