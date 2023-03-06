import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataCommunications {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;

  public idData$: Observable<Object>;
  public idData: Subject<Object>;

  public wishlistId$: Observable<number>;
  public wishlistId: Subject<number>;

  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();

    this.idData = new Subject();
    this.idData$ = this.idData.asObservable();

    this.wishlistId = new Subject();
    this.wishlistId$ = this.wishlistId.asObservable();
  }
}
