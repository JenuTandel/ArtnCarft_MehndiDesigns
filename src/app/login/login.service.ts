import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;
  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();
  }
}
