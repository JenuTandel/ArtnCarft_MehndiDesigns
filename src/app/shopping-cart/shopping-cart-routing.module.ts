import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartContainerComponent } from './shopping-cart-container/shopping-cart-container.component';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
  { path: '', component: ShoppingCartContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
