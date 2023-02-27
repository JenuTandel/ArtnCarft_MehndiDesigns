import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { artncraftCategory } from '../models/art-n-craft-category.model';
import { ProductDetailsPresenterService } from '../product-details-container/product-details-presenter/product-details-presenter.service';
import { ArtNCraftService } from '../services/art-n-craft.service';

@Component({
  selector: 'app-art-n-craft-category-container',
  templateUrl: './art-n-craft-category-container.component.html',
  styleUrls: ['./art-n-craft-category-container.component.scss'],
})
export class ArtNCraftCategoryContainerComponent implements OnInit {
  public artncraftData$!: Observable<artncraftCategory[]>;
  public tableProperty: Pagination;

  constructor(
    private artncraftcategoryservice: ArtNCraftService,
    private productDetailsPresenter: ProductDetailsPresenterService
  ) {
    this.tableProperty = new Pagination(0, 0);
  }
  ngOnInit(): void {}

  getArtnCraftData(tableProperty: Pagination) {
    this.tableProperty = tableProperty;
    this.artncraftData$ = this.artncraftcategoryservice.getArtnCraftData(
      this.tableProperty
    );
  }
}
