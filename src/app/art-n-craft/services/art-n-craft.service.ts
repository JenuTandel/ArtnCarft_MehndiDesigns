import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { artncraftCategory } from '../models/art-n-craft-category.model';

@Injectable()
export class ArtNCraftService {
  public baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getArtnCraftData(page: Pagination): Observable<artncraftCategory[]> {
    return this.http.get<artncraftCategory[]>(
      `${this.baseUrl}artncraftCategory?_page=${page.pageNumber}&_limit=${page.pageSize}`
    );
  }
}
