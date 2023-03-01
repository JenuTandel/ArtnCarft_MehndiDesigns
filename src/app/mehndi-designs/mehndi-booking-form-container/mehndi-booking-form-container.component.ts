import { Component, OnInit } from '@angular/core';
import { mehndiBookingForm } from '../models/mehndi-booking-form.model';
import { BookingFormService } from '../services/booking-form.service';

@Component({
  selector: 'app-mehndi-booking-form-container',
  templateUrl: './mehndi-booking-form-container.component.html',
  styleUrls: ['./mehndi-booking-form-container.component.scss'],
})
export class MehndiBookingFormContainerComponent implements OnInit {
  constructor(private bookingFormService: BookingFormService) {}

  ngOnInit(): void {}

  addBookingDetails(bookingData: any): void {
    this.bookingFormService.postBookingInfo(bookingData).subscribe((res) => {});
  }
}
