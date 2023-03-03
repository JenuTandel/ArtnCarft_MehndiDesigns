import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/login/login.model';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public baseUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = environment.baseUrl;
  }

  login(data: User) {
    return this.http.post<any>(`${this.baseUrl}login`, data).pipe(
      map((userData: User) => {
        userData.tokenId =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0TnVtYmVyIjoiOTg5ODc4Nzg5OCIsImlkIjoiMyIsImlhdCI6MTUxNjIzOTAyMn0.9uyGwzaxnJUFjSD5ga51TG-BWGZ5341MJslH6Ps2c1k';
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
