import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtNCraftRoutingModule } from './art-n-craft-routing.module';
import { ArtNCraftComponent } from './art-n-craft.component';
import { ArtNCraftCategoryContainerComponent } from './art-n-craft-category-container/art-n-craft-category-container.component';
import { ArtNCraftCategoryPresentationComponent } from './art-n-craft-category-container/art-n-craft-category-presentation/art-n-craft-category-presentation.component';
import { ProductDetailsContainerComponent } from './product-details-container/product-details-container.component';
import { ProductDetailsPresentationComponent } from './product-details-container/product-details-presentation/product-details-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { ArtNCraftService } from './services/art-n-craft.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsPresenterService } from './product-details-container/product-details-presenter/product-details-presenter.service';

@NgModule({
  declarations: [
    ArtNCraftCategoryContainerComponent,
    ArtNCraftCategoryPresentationComponent,
    ProductDetailsContainerComponent,
    ProductDetailsPresentationComponent,
  ],
  imports: [
    CommonModule,
    ArtNCraftRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
  providers: [ArtNCraftService, ProductDetailsPresenterService],
})
export class ArtNCraftModule {}
