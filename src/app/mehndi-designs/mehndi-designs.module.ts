import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MehndiDesignsRoutingModule } from './mehndi-designs-routing.module';
import { MehndiDesignsComponent } from './mehndi-designs.component';
import { MehndiDesignsCategoryContainerComponent } from './mehndi-designs-category-container/mehndi-designs-category-container.component';
import { MehndiDesignsCategoryPresentationComponent } from './mehndi-designs-category-container/mehndi-designs-category-presentation/mehndi-designs-category-presentation.component';
import { MehndiDesignsDetailsContainerComponent } from './mehndi-designs-details-container/mehndi-designs-details-container.component';
import { MehndiDesignsDetailsPresentationComponent } from './mehndi-designs-details-container/mehndi-designs-details-presentation/mehndi-designs-details-presentation.component';
import { MehndiBookingFormContainerComponent } from './mehndi-booking-form-container/mehndi-booking-form-container.component';
import { MehndiBookingFormPresentationComponent } from './mehndi-booking-form-container/mehndi-booking-form-presentation/mehndi-booking-form-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    MehndiDesignsComponent,
    MehndiDesignsCategoryContainerComponent,
    MehndiDesignsCategoryPresentationComponent,
    MehndiDesignsDetailsContainerComponent,
    MehndiDesignsDetailsPresentationComponent,
    MehndiBookingFormContainerComponent,
    MehndiBookingFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    MehndiDesignsRoutingModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class MehndiDesignsModule {}
