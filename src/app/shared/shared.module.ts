import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SuccessfullyMessageComponent } from './components/successfully-message/successfully-message.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [CardComponent, SuccessfullyMessageComponent, OrderConfirmationComponent],
  imports: [CommonModule],
  exports: [CardComponent, SuccessfullyMessageComponent],
})
export class SharedModule {}
