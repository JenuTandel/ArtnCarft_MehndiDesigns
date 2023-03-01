import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { mehndiBookingForm } from '../models/mehndi-booking-form.model';

@Injectable({
  providedIn: 'root',
})
export class BookingFormService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postBookingInfo(
    bookingDetails: mehndiBookingForm
  ): Observable<mehndiBookingForm> {
    return this.http.post<mehndiBookingForm>(
      `${this.baseUrl}mehndiBookingInfo`,
      bookingDetails
    );
  }
}
