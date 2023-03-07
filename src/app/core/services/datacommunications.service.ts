import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataCommunications {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;

  public idData$: Observable<Object>;
  public idData: Subject<Object>;

  public wishlistData$: Observable<any>;
  public wishlistData: Subject<any>;

  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();

    this.idData = new Subject();
    this.idData$ = this.idData.asObservable();

    this.wishlistData = new Subject();
    this.wishlistData$ = this.wishlistData.asObservable();
  }
}
