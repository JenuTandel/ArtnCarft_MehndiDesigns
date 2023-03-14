import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class MyOrderService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postMyOrdersData(
    productData: artNcraftProductDetails
  ): Observable<artNcraftProductDetails> {
    return this.http.post<artNcraftProductDetails>(
      `${this.baseUrl}my-orders`,
      productData
    );
  }

  getMyOrdersData(): Observable<artNcraftProductDetails[]> {
    return this.http.get<artNcraftProductDetails[]>(`${this.baseUrl}my-orders`);
  }
}
