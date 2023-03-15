import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';

export class myOrder {
  id?: number;
  products: artNcraftProductDetails[];

  constructor(products: artNcraftProductDetails[], id?: number) {
    this.products = products;
    this.id = id;
  }
}
