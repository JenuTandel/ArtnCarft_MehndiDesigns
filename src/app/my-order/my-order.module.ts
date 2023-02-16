import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { MyOrderComponent } from './my-order.component';
import { MyOrderListContainerComponent } from './my-order-list-container/my-order-list-container.component';
import { MyOrderListPresentationComponent } from './my-order-list-container/my-order-list-presentation/my-order-list-presentation.component';


@NgModule({
  declarations: [
    MyOrderComponent,
    MyOrderListContainerComponent,
    MyOrderListPresentationComponent
  ],
  imports: [
    CommonModule,
    MyOrderRoutingModule
  ]
})
export class MyOrderModule { }
