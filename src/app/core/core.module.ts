import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { FakebackendInterceptor } from './interceptor/fakebackend.interceptor';
import { DataCommunications } from './services/datacommunications.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent],
  imports: [CommonModule, NgbModule, RouterModule, OverlayModule],
  exports: [HeaderComponent, ProfileComponent],
  providers: [
    OverlayService,
    AuthService,
    AuthGuard,
    DataCommunications,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakebackendInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
