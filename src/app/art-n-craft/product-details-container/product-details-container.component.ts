import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { artNcraftProductDetails } from '../models/art-n-craft-product-details.model';
import { ArtNCraftProductDetailsService } from '../services/art-n-craft-product-details.service';
import { ProductDetailsPresenterService } from './product-details-presenter/product-details-presenter.service';

@Component({
  selector: 'app-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss'],
})
export class ProductDetailsContainerComponent implements OnInit {
  public birthdayCardsData$!: Observable<artNcraftProductDetails[]>;
  public tableProperty: Pagination;
  constructor(
    private artNcraftProductService: ArtNCraftProductDetailsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.tableProperty = new Pagination(0, 0);
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

  getBirthdayCards(tableProperty: Pagination) {
    this.tableProperty = tableProperty;
    // if (
    //   this.activatedRoute.snapshot.params['categoryName'] == 'BirthDayCards'
    // ) {
    this.birthdayCardsData$ = this.artNcraftProductService.getBirthdayCards(
      this.tableProperty
    );
    // }
    // if (this.activatedRoute.snapshot.params['categoryName'] == 'GiftBox')
    //   this.birthdayCardsData$ = this.artNcraftProductService.getGiftBox(
    //     this.tableProperty
    //   );
  }
}
