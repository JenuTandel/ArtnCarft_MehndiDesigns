import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDataContainerComponent } from './profile-data-container/profile-data-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileDataContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
