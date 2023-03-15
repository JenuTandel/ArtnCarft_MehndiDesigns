import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order-list-presentation',
  templateUrl: './my-order-list-presentation.component.html',
  styleUrls: ['./my-order-list-presentation.component.scss'],
})
export class MyOrderListPresentationComponent implements OnInit {
  @Input() orders: any;
  @Input() mehndiBooking: any;
  public today = Date.now();
  constructor() {}
  ngOnInit(): void {
    console.log(this.orders);
  }
}
