import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataCommunications {
  public islogin$: Observable<boolean>;
  public islogin: Subject<boolean>;
  public idData$: Observable<Object>;
  public idData: Subject<Object>;

  constructor() {
    this.islogin = new Subject();
    this.islogin$ = this.islogin.asObservable();

    this.idData = new Subject();
    this.idData$ = this.idData.asObservable();
  }
}
