import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistContainerComponent } from './wishlist-container/wishlist-container.component';
import { WishlistComponent } from './wishlist.component';

const routes: Routes = [{ path: '', component: WishlistContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistRoutingModule {}
