import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/login/login.model';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public baseUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = environment.baseUrl;
  }

  login(data: User) {
    return this.http.post<any>(`${this.baseUrl}login`, data).pipe(
      map((userData: User) => {
        userData.tokenId =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0TnVtYmVyIjoiOTg5ODc4Nzg5OCIsInBhc3N3b3JkIjoiMTIzNDU2NzgifQ.H0SF8NF_onb8KUXbIy0_GvWHrqS96iNGeUp12Mj2Xz4';
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
