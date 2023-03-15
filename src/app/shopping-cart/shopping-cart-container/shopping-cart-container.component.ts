import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { CartService } from 'src/app/core/services/cart.service';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { MyOrderService } from 'src/app/core/services/myorder.service';
import { myOrder } from 'src/app/my-order/model/my-order.model';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss'],
})
export class ShoppingCartContainerComponent implements OnInit {
  public cartData$!: Observable<artNcraftProductDetails[]>;
  public response: any;

  constructor(
    private cartService: CartService,
    private orderService: MyOrderService
  ) {
    // this.j = 1;
  }
  ngOnInit(): void {
    this.getCartData();
  }

  getCartData() {
    this.cartData$ = this.cartService.getCartData();
  }

  UpdateProductQuantity(updatedData: artNcraftProductDetails) {
    this.cartService
      .updateCartProductQuantity(updatedData.id, updatedData)
      .subscribe((res) => {});
  }

  removeProduct(id: number) {
    this.cartService.deleteCartProduct(id).subscribe((res) => {});
    this.getCartData();
  }

  postOrderData(orderData: artNcraftProductDetails[]) {
    // console.log(orderData);

    // for (let i = 0; i < orderData.length; i++) {
    // orderData[i].id = orderData.length - 1 + 1;
    // if (orderData[i].id == orderData[i - 1].id) {
    //   orderData[i].id += 1;

    // }
    const order: myOrder = new myOrder(orderData);
    console.log(order);

    // order.products = orderData;
    this.orderService.postMyOrdersData(order).subscribe((res) => {
      console.log(res);
    });
    // console.log('id', orderData[i].id);
    // console.log(this.j);

    // this.j++;
    // }
    // console.log(this.j);
  }

  deleteOrderData(orderData: artNcraftProductDetails[]) {
    for (let i = 0; i < orderData.length; i++) {
      this.cartService
        .deleteCartProduct(orderData[i].id)
        .subscribe((res) => {});
    }
    this.getCartData();
  }
}
