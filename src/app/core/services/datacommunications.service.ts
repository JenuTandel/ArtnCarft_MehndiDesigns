import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class DataCommunications {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;

  public idData$: Observable<Object>;
  public idData: Subject<Object>;

  public isOrderConfirm$: Observable<boolean>;
  public isOrderConfirm: Subject<boolean>;

  public cartData$: Observable<any>;
  public cartData: Subject<any>;

  public updatedcartData$: Observable<any>;
  public updatedcartData: Subject<any>;

  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();

    this.idData = new Subject();
    this.idData$ = this.idData.asObservable();

    this.isOrderConfirm = new Subject();
    this.isOrderConfirm$ = this.isOrderConfirm.asObservable();

    this.cartData = new ReplaySubject();
    this.cartData$ = this.cartData.asObservable();

    this.updatedcartData = new ReplaySubject();
    this.updatedcartData$ = this.cartData.asObservable();
  }
}
