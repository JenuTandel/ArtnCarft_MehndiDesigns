import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreModule } from './core/core.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './core/services/registration.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ArtNCraftService } from './art-n-craft/services/art-n-craft.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  providers: [RegistrationService, ArtNCraftService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    NgbCarouselModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class AppModule {}
