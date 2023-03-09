import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { ArtNCraftProductDetailsService } from 'src/app/art-n-craft/services/art-n-craft-product-details.service';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-wishlist-container',
  templateUrl: './wishlist-container.component.html',
  styleUrls: ['./wishlist-container.component.scss'],
})
export class WishlistContainerComponent implements OnInit {
  public tableProperty: Pagination;
  public wishlist: any;
  constructor(
    private artNCraftProductDetailsService: ArtNCraftProductDetailsService
  ) {
    this.tableProperty = new Pagination(0, 0);
    this.wishlist = [];
  }
  ngOnInit(): void {
    this.getFavData();
  }

  getFavData() {
    this.artNCraftProductDetailsService
      .getAllBirthdayCards()
      .subscribe((res) => {
        console.log(res);
        const a = res.filter((data: any) => data.isLike == true);
        // if (res.isLike == true) {
        this.wishlist = a;
        // }
      });
    console.log(this.wishlist);
  }
}
