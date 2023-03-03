import { ContactUsComponent } from '../contact-us/contact-us.component';

export class User {
  public id: number;
  public conatctNumber: string;
  public password: string;
  public tokenId: any;

  constructor(
    id: number,
    conatctNumber: string,
    password: string,
    tokenId: any
  ) {
    this.id = id;
    this.conatctNumber = conatctNumber;
    this.password = password;
    this.tokenId = tokenId;
  }
}
