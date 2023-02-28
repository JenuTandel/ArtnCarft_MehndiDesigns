export class mehndiDesignsDetails {
  id: number;
  mehndiName: string;
  price: number;
  mehndiImgpath: string;

  constructor(
    id: number,
    mehndiName: string,
    price: number,
    mehndiImgpath: string
  ) {
    this.id = id;
    this.mehndiName = mehndiName;
    this.price = price;
    this.mehndiImgpath = mehndiImgpath;
  }
}
