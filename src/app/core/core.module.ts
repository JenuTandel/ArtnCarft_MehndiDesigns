import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgbModule, RouterModule, OverlayModule],
  exports: [HeaderComponent],
  providers: [OverlayService],
})
export class CoreModule {}
