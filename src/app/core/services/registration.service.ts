import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationData } from '../../registration/registration.model';

@Injectable()
export class RegistrationService {
  public baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  AddUser(user: RegistrationData): Observable<RegistrationData> {
    return this.http.post<RegistrationData>(
      this.baseUrl + 'registrationData',
      user
    );
  }

  getUser(): Observable<RegistrationData[]> {
    return this.http.get<RegistrationData[]>(this.baseUrl + 'registrationData');
  }
}
