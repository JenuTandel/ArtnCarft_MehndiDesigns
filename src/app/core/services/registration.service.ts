import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RegistrationData } from '../../registration/registration.model';

@Injectable()
export class RegistrationService {
  public baseUrl: string = environment.baseUrl;
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

  getUserById(id: number): Observable<RegistrationData> {
    return this.http.get<RegistrationData>(
      this.baseUrl + 'registrationData/' + id
    );
  }

  updateUser(data: RegistrationData, id: number): Observable<RegistrationData> {
    return this.http.put<RegistrationData>(
      this.baseUrl + 'registrationData/' + id,
      data
    );
  }
}
