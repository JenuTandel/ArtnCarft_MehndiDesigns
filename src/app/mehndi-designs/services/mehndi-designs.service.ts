import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { environment } from 'src/environments/environment.development';
import { mehndiDesignCategory } from '../models/mehndi-designs-category.model';

@Injectable({
  providedIn: 'root',
})
export class MehndiDesignsService {
  public baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getMehndiDesignsData(page: Pagination): Observable<mehndiDesignCategory[]> {
    return this.http.get<mehndiDesignCategory[]>(
      `${this.baseUrl}mehndiDesignCategory?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }
}
