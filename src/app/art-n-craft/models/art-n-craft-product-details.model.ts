export class artNcraftProductDetails {
  id: number;
  productName: string;
  price: number;
  productImgpath: string;
  isLike: boolean;
  quantity: number;
  totalPrice: number;

  constructor(
    id: number,
    productName: string,
    price: number,
    productImgpath: string,
    isLike: boolean,
    quantity: number,
    totalPrice: number
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImgpath = productImgpath;
    this.isLike = isLike;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
