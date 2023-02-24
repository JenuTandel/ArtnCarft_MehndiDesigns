import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MehndiDesignsCategoryContainerComponent } from './mehndi-designs-category-container/mehndi-designs-category-container.component';
import { MehndiDesignsDetailsContainerComponent } from './mehndi-designs-details-container/mehndi-designs-details-container.component';
import { MehndiDesignsComponent } from './mehndi-designs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mehndi-category',
  },
  {
    path: 'mehndi-category',
    component: MehndiDesignsCategoryContainerComponent,
  },
  {
    path: 'mehndi-details/:categoryname',
    component: MehndiDesignsDetailsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MehndiDesignsRoutingModule {}
