import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class DataCommunications {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;

  public idData$: Observable<Object>;
  public idData: Subject<Object>;

  public wishlistData$: Observable<any>;
  public wishlistData: Subject<any>;

  public cartData$: Observable<any>;
  public cartData: Subject<any>;

  public updatedcartData$: Observable<any>;
  public updatedcartData: Subject<any>;

  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();

    this.idData = new Subject();
    this.idData$ = this.idData.asObservable();

    this.wishlistData = new ReplaySubject();
    this.wishlistData$ = this.wishlistData.asObservable();

    this.cartData = new ReplaySubject();
    this.cartData$ = this.cartData.asObservable();

    this.updatedcartData = new ReplaySubject();
    this.updatedcartData$ = this.cartData.asObservable();
  }
}
