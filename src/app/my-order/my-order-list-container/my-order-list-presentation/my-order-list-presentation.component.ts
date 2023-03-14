import { Component, Input, OnInit } from '@angular/core';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { MyOrderService } from 'src/app/core/services/myorder.service';

@Component({
  selector: 'app-my-order-list-presentation',
  templateUrl: './my-order-list-presentation.component.html',
  styleUrls: ['./my-order-list-presentation.component.scss'],
})
export class MyOrderListPresentationComponent implements OnInit {
  @Input() orders: any;
  @Input() mehndiBooking: any;
  public today = Date.now();
  constructor(private myorderService: MyOrderService) {}
  ngOnInit(): void {}
}
