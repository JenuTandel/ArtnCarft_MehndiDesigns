import { Component, OnInit } from '@angular/core';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';

@Component({
  selector: 'app-my-order-list-presentation',
  templateUrl: './my-order-list-presentation.component.html',
  styleUrls: ['./my-order-list-presentation.component.scss'],
})
export class MyOrderListPresentationComponent implements OnInit {
  public orders: any;
  public today = Date.now();
  constructor(private dataCommunications: DataCommunications) {
    this.orders = [];
  }
  ngOnInit(): void {
    this.dataCommunications.wishlistData$.subscribe((res: any) => {
      this.orders.push(res);
      console.log('orders', this.orders);
    });
  }
}
