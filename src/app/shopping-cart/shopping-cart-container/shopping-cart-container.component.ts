import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss'],
})
export class ShoppingCartContainerComponent implements OnInit {
  public cartData$!: Observable<artNcraftProductDetails[]>;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.getCartData();
  }
  getCartData() {
    this.cartData$ = this.cartService.getCartData();
    console.log(this.cartData$);
  }
}
