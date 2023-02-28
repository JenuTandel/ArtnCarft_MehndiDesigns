import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { environment } from 'src/environments/environment.development';
import { mehndiDesignsDetails } from '../models/mehndi-designs-details.model';

@Injectable({
  providedIn: 'root',
})
export class MehndiDesignsDetailsService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getBridalMehndiDesigns(page: Pagination): Observable<mehndiDesignsDetails[]> {
    return this.http.get<mehndiDesignsDetails[]>(
      `${this.baseUrl}bridalMehndiDesigns?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }
  getSimpleMehndiDesigns(page: Pagination): Observable<mehndiDesignsDetails[]> {
    return this.http.get<mehndiDesignsDetails[]>(
      `${this.baseUrl}simpleMehndiDesigns?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }
}
