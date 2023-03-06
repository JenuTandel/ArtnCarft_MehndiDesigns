import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { WishlistContainerComponent } from './wishlist-container/wishlist-container.component';
import { WishlistPresentationComponent } from './wishlist-container/wishlist-presentation/wishlist-presentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WishlistComponent,
    WishlistContainerComponent,
    WishlistPresentationComponent,
  ],
  imports: [CommonModule, WishlistRoutingModule, SharedModule],
})
export class WishlistModule {}
