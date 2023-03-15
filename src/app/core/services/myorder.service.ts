import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { myOrder } from 'src/app/my-order/model/my-order.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class MyOrderService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postMyOrdersData(productData: myOrder): Observable<myOrder> {
    return this.http.post<myOrder>(`${this.baseUrl}my-orders`, productData);
  }

  getMyOrdersData(): Observable<myOrder[]> {
    return this.http.get<myOrder[]>(`${this.baseUrl}my-orders`);
  }
}
