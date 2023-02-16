import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileDataContainerComponent } from './profile-data-container/profile-data-container.component';
import { ProfileDataPresentationComponent } from './profile-data-container/profile-data-presentation/profile-data-presentation.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDataContainerComponent,
    ProfileDataPresentationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
