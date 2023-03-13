import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartPresenterService {
  public updatedCard: any;
  constructor() {
    this.updatedCard = {};
  }

  IncreaseQuantity(data: any) {
    if (data) {
      data.quantity = data.quantity + 1;
      data.totalPrice = data.price * data.quantity;
      this.updatedCard = data;
    }
    return this.updatedCard;
  }

  DecreaseQuantity(data: any) {
    if (data) {
      data.quantity = data.quantity - 1;
      data.totalPrice = data.price * data.quantity;
      this.updatedCard = data;
    }
    return this.updatedCard;
  }
}
