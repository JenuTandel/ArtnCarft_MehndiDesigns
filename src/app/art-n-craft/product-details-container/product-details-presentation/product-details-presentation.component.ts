import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { artNcraftProductDetails } from '../../models/art-n-craft-product-details.model';
import { ProductDetailsPresenterService } from '../product-details-presenter/product-details-presenter.service';

@Component({
  selector: 'app-product-details-presentation',
  templateUrl: './product-details-presentation.component.html',
  styleUrls: ['./product-details-presentation.component.scss'],
})
export class ProductDetailsPresentationComponent implements OnInit {
  @Input() public set birthdayCardsResponse(
    birthdayCardsResponse: artNcraftProductDetails[] | null
  ) {
    if (birthdayCardsResponse) {
      this.title = 'Birthday Cards';
      this._birthdayCardsResponse = this._birthdayCardsResponse.concat(
        birthdayCardsResponse
      );
    }
  }
  public get birthdayCardsResponse(): artNcraftProductDetails[] {
    return this._birthdayCardsResponse;
  }

  @Output() getBirthdayCards: EventEmitter<Pagination>;
  public tableProperty: Pagination;
  public distance: number = -0.5;
  public throttle: number = 0;
  public title: any;
  private _birthdayCardsResponse: artNcraftProductDetails[];
  constructor(private productDetailPresenter: ProductDetailsPresenterService) {
    this._birthdayCardsResponse = [];
    this.getBirthdayCards = new EventEmitter<Pagination>();
    this.tableProperty = new Pagination(1, 8);
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 8;
    this.title = '';
  }
  ngOnInit(): void {
    this.getBirthdayCards.emit(this.tableProperty);
  }
  onScroll() {
    this.tableProperty.pageNumber++;
    this.getBirthdayCards.emit(this.tableProperty);
  }
}
