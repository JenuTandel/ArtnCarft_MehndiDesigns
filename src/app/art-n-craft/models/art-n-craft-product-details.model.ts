export class artNcraftProductDetails {
  id: number;
  productName: string;
  price: number;
  productImgpath: string;
  isLike: boolean;

  constructor(
    id: number,
    productName: string,
    price: number,
    productImgpath: string,
    isLike: boolean
  ) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImgpath = productImgpath;
    this.isLike = isLike;
  }
}
