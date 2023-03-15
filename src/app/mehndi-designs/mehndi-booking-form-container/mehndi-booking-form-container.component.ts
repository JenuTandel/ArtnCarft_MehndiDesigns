import { Component, OnInit } from '@angular/core';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { mehndiBookingForm } from '../models/mehndi-booking-form.model';
import { BookingFormService } from '../services/booking-form.service';

@Component({
  selector: 'app-mehndi-booking-form-container',
  templateUrl: './mehndi-booking-form-container.component.html',
  styleUrls: ['./mehndi-booking-form-container.component.scss'],
})
export class MehndiBookingFormContainerComponent implements OnInit {
  public data: any;
  constructor(
    private bookingFormService: BookingFormService,
    private dataCommunication: DataCommunications
  ) {}

  ngOnInit(): void {
    this.dataCommunication.mehndiBookingInfo$.subscribe((res: any) => {
      this.data = res;
    });
    console.log(this.data);
  }

  addBookingDetails(bookingData: any): void {
    bookingData['mehndiName'] = this.data.mehndiName;
    bookingData['price'] = this.data.price;
    this.bookingFormService.postBookingInfo(bookingData).subscribe((res) => {});
  }
}
