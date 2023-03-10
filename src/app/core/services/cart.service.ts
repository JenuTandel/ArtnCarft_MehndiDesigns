import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class CartService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postCartData(
    productData: artNcraftProductDetails
  ): Observable<artNcraftProductDetails> {
    return this.http.post<artNcraftProductDetails>(
      `${this.baseUrl}cartData`,
      productData
    );
  }

  getCartData(): Observable<artNcraftProductDetails[]> {
    return this.http.get<artNcraftProductDetails[]>(`${this.baseUrl}cartData`);
  }

  getCartDataById(id: number): Observable<artNcraftProductDetails> {
    return this.http.get<artNcraftProductDetails>(
      `${this.baseUrl}cartData/${id}`
    );
  }

  updateCartProductQuantity(
    id: number,
    data: artNcraftProductDetails
  ): Observable<artNcraftProductDetails> {
    return this.http.put<artNcraftProductDetails>(
      `${this.baseUrl}cartData/${id}`,
      data
    );
  }

  deleteCartProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}cartData/${id}`);
  }
}
