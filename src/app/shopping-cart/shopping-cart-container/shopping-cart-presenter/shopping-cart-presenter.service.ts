import { Injectable } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';

@Injectable()
export class ShoppingCartPresenterService {
  public updatedCard: any;
  constructor(private communicationService: DataCommunications) {
    this.updatedCard = {};
  }

  IncreaseQuantity(data: any) {
    if (data) {
      data.quantity = data.quantity + 1;
      data.price = data.price * data.quantity;
      this.updatedCard = data;
    }
    return this.updatedCard;
  }

  DecreaseQuantity(data: any) {
    if (data) {
      console.log('data', data);

      if (data.quantity <= 1) {
        data.quantity = 1;
      } else {
        data.quantity = data.quantity - 1;
      }
      data.price = data.price * data.quantity;
      this.updatedCard = data;
    }
    return this.updatedCard;
  }
}
