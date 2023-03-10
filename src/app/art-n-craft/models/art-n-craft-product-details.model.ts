export class artNcraftProductDetails {
  id: number;
  productName: string;
  price: number;
  productImgpath: string;
  isLike: boolean;
  quantity: number;

  constructor(
    id: number,
    productName: string,
    price: number,
    productImgpath: string,
    isLike: boolean,
    quantity: number
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImgpath = productImgpath;
    this.isLike = isLike;
    this.quantity = quantity;
  }
}
