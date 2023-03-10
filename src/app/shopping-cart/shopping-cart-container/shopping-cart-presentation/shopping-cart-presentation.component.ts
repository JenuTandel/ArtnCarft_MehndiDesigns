import { Component, EventEmitter, Input, Output } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { ShoppingCartPresenterService } from '../shopping-cart-presenter/shopping-cart-presenter.service';

@Component({
  selector: 'app-shopping-cart-presentation',
  templateUrl: './shopping-cart-presentation.component.html',
  styleUrls: ['./shopping-cart-presentation.component.scss'],
  viewProviders: [ShoppingCartPresenterService],
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
  @Output() Cartid: EventEmitter<number>;
  @Output() UpdatedData: EventEmitter<artNcraftProductDetails>;
  public today = Date.now();
  public updatedCartQuantity: artNcraftProductDetails;
  private _cartDataResponse: artNcraftProductDetails[];

  constructor(
    private shoppingCartPresenterService: ShoppingCartPresenterService
  ) {
    this._cartDataResponse = [];
    this.Cartid = new EventEmitter();
    this.UpdatedData = new EventEmitter();

    this.updatedCartQuantity = {
      id: 0,
      productName: '',
      productImgpath: '',
      price: 0,
      quantity: 0,
      isLike: false,
    };
  }
  ngOnInit(): void {}

  onPlus(data: artNcraftProductDetails) {
    this.updatedCartQuantity =
      this.shoppingCartPresenterService.IncreaseQuantity(data);
    this.UpdatedData.emit(this.updatedCartQuantity);
  }
  onMinus(data: artNcraftProductDetails) {
    this.updatedCartQuantity =
      this.shoppingCartPresenterService.DecreaseQuantity(data);
    console.log('updated', this.updatedCartQuantity);
    this.UpdatedData.emit(this.updatedCartQuantity);
  }

  onRemove(id: number) {
    this.Cartid.emit(id);
  }
}
