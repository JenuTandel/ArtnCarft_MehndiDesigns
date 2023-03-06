import { Component, Input, OnInit } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';

@Component({
  selector: 'app-wishlist-presentation',
  templateUrl: './wishlist-presentation.component.html',
  styleUrls: ['./wishlist-presentation.component.scss'],
})
export class WishlistPresentationComponent implements OnInit {
  @Input() wishlistDataResponse: artNcraftProductDetails[];

  constructor() {
    this.wishlistDataResponse = [];
  }
  ngOnInit(): void {
    console.log(this.wishlistDataResponse);
  }
}
