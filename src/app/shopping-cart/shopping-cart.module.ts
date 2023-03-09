import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartContainerComponent } from './shopping-cart-container/shopping-cart-container.component';
import { ShoppingCartPresentationComponent } from './shopping-cart-container/shopping-cart-presentation/shopping-cart-presentation.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartContainerComponent,
    ShoppingCartPresentationComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
