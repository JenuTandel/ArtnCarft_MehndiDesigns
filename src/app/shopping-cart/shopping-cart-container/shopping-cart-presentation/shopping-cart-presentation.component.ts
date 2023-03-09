import { Component, Input } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';

@Component({
  selector: 'app-shopping-cart-presentation',
  templateUrl: './shopping-cart-presentation.component.html',
  styleUrls: ['./shopping-cart-presentation.component.scss'],
})
export class ShoppingCartPresentationComponent {
  @Input() public set cartDataResponse(
    cartDataResponse: artNcraftProductDetails[] | null
  ) {
    if (cartDataResponse) {
      this._cartDataResponse = this._cartDataResponse.concat(cartDataResponse);
    }
  }
  public get cartDataResponse(): artNcraftProductDetails[] {
    return this._cartDataResponse;
  }
  public today = Date.now();
  public quantity: number;
  private _cartDataResponse: artNcraftProductDetails[];

  constructor(private dataCommunications: DataCommunications) {
    this._cartDataResponse = [];
    this.quantity = 1;
  }
  ngOnInit(): void {
    // this.dataCommunications.wishlistData$.subscribe((res: any) => {
    //   this.cartData.push(res);
    //   console.log('cartData', this.cartData);
    // });
  }
  onPlus(id: number) {
    this.quantity = this.quantity + 1;
  }
  onMinus(id: number) {
    if (this.quantity <= 1) {
      this.quantity = 1;
    } else {
      this.quantity = this.quantity - 1;
    }
  }
}
