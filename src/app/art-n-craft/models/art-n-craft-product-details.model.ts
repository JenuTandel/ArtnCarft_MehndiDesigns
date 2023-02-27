export class artNcraftProductDetails {
  id: number;
  productName: string;
  price: number;
  productImgpath: string;

  constructor(
    id: number,
    productName: string,
    price: number,
    productImgpath: string
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImgpath = productImgpath;
  }
}
