import { Component, OnInit } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { MyOrderService } from 'src/app/core/services/myorder.service';
import { BookingFormService } from 'src/app/mehndi-designs/services/booking-form.service';

@Component({
  selector: 'app-my-order-list-container',
  templateUrl: './my-order-list-container.component.html',
  styleUrls: ['./my-order-list-container.component.scss'],
})
export class MyOrderListContainerComponent implements OnInit {
  public myOrders: artNcraftProductDetails[];
  public mehndiOrders: any;
  constructor(
    private myorderService: MyOrderService,
    private mehndiBookingService: BookingFormService
  ) {
    this.myOrders = [];
    this.mehndiOrders = [];
  }
  ngOnInit(): void {
    this.myorderService.getMyOrdersData().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.myOrders = res;
        // res.forEach((data) => {
        // this.myOrders.push(data);
        // });
        // this.myOrders.push(res);
      }
    });

    this.mehndiBookingService.getBookingInfo().subscribe((res) => {
      this.mehndiOrders = res;
    });
  }
}
