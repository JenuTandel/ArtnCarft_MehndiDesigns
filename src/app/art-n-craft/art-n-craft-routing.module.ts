import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtNCraftCategoryContainerComponent } from './art-n-craft-category-container/art-n-craft-category-container.component';
import { ArtNCraftComponent } from './art-n-craft.component';
import { ProductDetailsContainerComponent } from './product-details-container/product-details-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'art-n-craft-category',
  },
  {
    path: 'art-n-craft-category',
    component: ArtNCraftCategoryContainerComponent,
  },
  {
    path: 'art-n-craft-product-details',
    component: ProductDetailsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtNCraftRoutingModule {}
