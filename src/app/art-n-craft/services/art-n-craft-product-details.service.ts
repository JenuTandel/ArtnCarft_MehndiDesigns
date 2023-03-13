import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { environment } from 'src/environments/environment.development';
import { artNcraftProductDetails } from '../models/art-n-craft-product-details.model';

@Injectable({
  providedIn: 'root',
})
export class ArtNCraftProductDetailsService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getBirthdayCards(page: Pagination): Observable<artNcraftProductDetails[]> {
    return this.http.get<artNcraftProductDetails[]>(
      `${this.baseUrl}birthdayCards?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }

  getGiftBox(page: Pagination): Observable<artNcraftProductDetails[]> {
    return this.http.get<artNcraftProductDetails[]>(
      `${this.baseUrl}bridalMehndiDesigns?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }

  getCardById(id: number): Observable<artNcraftProductDetails> {
    return this.http.get<artNcraftProductDetails>(
      `${this.baseUrl}birthdayCards/${id}`
    );
  }

  updateFavData(
    data: artNcraftProductDetails,
    id: number
  ): Observable<artNcraftProductDetails> {
    return this.http.put<artNcraftProductDetails>(
      `${this.baseUrl}birthdayCards/${id}`,
      data
    );
  }

  getAllBirthdayCards(): Observable<artNcraftProductDetails[]> {
    return this.http.get<artNcraftProductDetails[]>(
      `${this.baseUrl}birthdayCards`
    );
  }

  deleteFavData(id: number): Observable<artNcraftProductDetails> {
    return this.http.delete<artNcraftProductDetails>(
      `${this.baseUrl}birthdayCards/${id}`
    );
  }
}
