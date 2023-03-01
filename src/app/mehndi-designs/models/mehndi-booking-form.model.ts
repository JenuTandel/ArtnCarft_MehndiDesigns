export class mehndiBookingForm {
  id: number;
  name: string;
  address: string;
  contactNumber: number;
  date: string;

  constructor(
    id: number,
    name: string,
    address: string,
    contactNumber: number,
    date: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contactNumber = contactNumber;
    this.date = date;
  }
}
