import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { OrderConfirmationComponent } from 'src/app/shared/components/order-confirmation/order-confirmation.component';
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
      this._cartDataResponse = cartDataResponse;
      for (let i = 0; i < this._cartDataResponse.length; i++) {
        let price = this._cartDataResponse[i].totalPrice;
        this.totalMRP = this.totalMRP + price;
      }
    }
  }
  public get cartDataResponse(): artNcraftProductDetails[] {
    return this._cartDataResponse;
  }
  @Output() Cartid: EventEmitter<number>;
  @Output() OrderData: EventEmitter<artNcraftProductDetails[]>;
  @Output() UpdatedData: EventEmitter<artNcraftProductDetails>;
  public today = Date.now();
  public onQuantity: boolean;
  public totalMRP: number;
  public orderConfirm: boolean;
  public updatedCartQuantity: artNcraftProductDetails;
  private _cartDataResponse: artNcraftProductDetails[];

  constructor(
    private shoppingCartPresenterService: ShoppingCartPresenterService,
    private overlayService: OverlayService,
    private dataCommunication: DataCommunications,
    private router: Router
  ) {
    this._cartDataResponse = [];
    this.onQuantity = false;
    this.totalMRP = 0;
    this.orderConfirm = false;
    this.Cartid = new EventEmitter();
    this.UpdatedData = new EventEmitter();
    this.OrderData = new EventEmitter();

    this.updatedCartQuantity = {
      id: 0,
      productName: '',
      productImgpath: '',
      price: 0,
      quantity: 0,
      isLike: false,
      totalPrice: 0,
    };
  }
  ngOnInit(): void {
    console.log(this.cartDataResponse);

    this.cartDataResponse.forEach((res) => {
      res.totalPrice = res.price;
    });
  }

  onPlus(data: artNcraftProductDetails) {
    this.onQuantity = true;
    this.updatedCartQuantity =
      this.shoppingCartPresenterService.IncreaseQuantity(data);
    this.totalMRP = this.totalMRP + this.updatedCartQuantity.price;
    this.UpdatedData.emit(this.updatedCartQuantity);
  }
  onMinus(data: artNcraftProductDetails) {
    this.onQuantity = true;
    if (data.quantity == 1) {
    } else {
      this.updatedCartQuantity =
        this.shoppingCartPresenterService.DecreaseQuantity(data);
      this.totalMRP = this.totalMRP - this.updatedCartQuantity.price;
      this.UpdatedData.emit(this.updatedCartQuantity);
    }
  }

  onRemove(data: artNcraftProductDetails) {
    this.totalMRP = 0;
    this.Cartid.emit(data.id);
  }

  placeOrder() {
    this.overlayService.openDialog(OrderConfirmationComponent);
    this.dataCommunication.isOrderConfirm$.subscribe((res) => {
      this.orderConfirm = res;
      if (this.orderConfirm == true) {
        this.OrderData.emit(this.cartDataResponse);
      }
    });
  }
  onShopNow() {
    this.router.navigateByUrl('art-n-craft');
  }
}
