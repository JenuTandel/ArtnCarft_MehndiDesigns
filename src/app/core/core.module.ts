import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent],
  imports: [CommonModule, NgbModule, RouterModule, OverlayModule],
  exports: [HeaderComponent, ProfileComponent],
  providers: [OverlayService],
})
export class CoreModule {}
