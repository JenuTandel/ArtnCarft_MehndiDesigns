import { Component } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss'],
})
export class ProductDetailsContainerComponent {
  ngOnInit(): void {}

  getBirthdayCards(tableProperty: Pagination) {
    debugger;
    this.tableProperty = tableProperty;
    if (
      this.activatedRoute.snapshot.params['categoryname'] == 'BirthdayCards'
    ) {
      this.birthdayCardsData$ = this.artNcraftProductService.getBirthdayCards(
        this.tableProperty
      );
    }
    if (this.activatedRoute.snapshot.params['categoryname'] == 'GiftBox')
      this.birthdayCardsData$ = this.artNcraftProductService.getGiftBox(
        this.tableProperty
      );
  }
}
