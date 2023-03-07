import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrderListContainerComponent } from './my-order-list-container/my-order-list-container.component';
import { MyOrderComponent } from './my-order.component';

const routes: Routes = [{ path: '', component: MyOrderListContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrderRoutingModule { }
