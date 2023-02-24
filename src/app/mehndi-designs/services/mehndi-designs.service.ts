import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { mehndiDesignCategory } from '../models/mehndi-designs-category.model';

@Injectable({
  providedIn: 'root',
})
export class MehndiDesignsService {
  public baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getMehndiDesignsData(page: Pagination): Observable<mehndiDesignCategory[]> {
    return this.http.get<mehndiDesignCategory[]>(
      `${this.baseUrl}mehndiDesignCategory?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }
}
