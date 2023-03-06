import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/login/login.model';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {
  public baseUrl: string;
  public secretkey: string;
  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = environment.baseUrl;
    this.secretkey = 'thisismysecretkey';
  }

  login(data: User) {
    return this.http.post<any>(`${this.baseUrl}login`, data).pipe(
      map((userData: User) => {
        // userData.tokenId =
        //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0TnVtYmVyIjoiOTg5ODc4Nzg5OCIsImlkIjoiMyIsImlhdCI6MTUxNjIzOTAyMn0.9uyGwzaxnJUFjSD5ga51TG-BWGZ5341MJslH6Ps2c1k';
        userData.tokenId = CryptoJS.AES.encrypt(
          JSON.stringify(userData),
          this.secretkey
        ).toString();
        console.log(userData.tokenId);
        localStorage.setItem('userToken', JSON.stringify(userData.tokenId));
        localStorage.setItem('user', JSON.stringify(userData));
        return userData.tokenId;
      })
    );
  }

  // logout() {
  //   localStorage.clear();
  //   this.router.navigateByUrl('login');
  // }
}
