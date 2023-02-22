export class RegistrationData {
  id: number;
  name: string;
  password: string;
  address: string;
  city: string;
  pincode: number;

  constructor(
    id: number,
    name: string,
    password: string,
    address: string,
    city: string,
    pincode: number
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
  }
}
