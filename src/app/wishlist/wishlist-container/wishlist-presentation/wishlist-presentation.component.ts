import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { ArtNCraftProductDetailsService } from 'src/app/art-n-craft/services/art-n-craft-product-details.service';

@Component({
  selector: 'app-wishlist-presentation',
  templateUrl: './wishlist-presentation.component.html',
  styleUrls: ['./wishlist-presentation.component.scss'],
})
export class WishlistPresentationComponent implements OnInit {
  @Input() wishlistDataResponse: artNcraftProductDetails[];
  @Output() productData: EventEmitter<artNcraftProductDetails>;

  constructor() {
    this.wishlistDataResponse = [];
    this.productData = new EventEmitter();
  }
  ngOnInit(): void {
    console.log(this.wishlistDataResponse);
  }
  updatedWishList(data: any) {
    console.log('d', data.action);
    this.productData.emit(data);
  }
}
