import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { artNcraftProductDetails } from 'src/app/art-n-craft/models/art-n-craft-product-details.model';
import { ArtNCraftProductDetailsService } from 'src/app/art-n-craft/services/art-n-craft-product-details.service';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { MehndiBookingFormContainerComponent } from 'src/app/mehndi-designs/mehndi-booking-form-container/mehndi-booking-form-container.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() productData: any;
  public get?: boolean;
  public mehndi?: boolean;
  public isLike: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private overlayService: OverlayService,
    private authguard: AuthGuard,
    private artNCraftProductDetailsService: ArtNCraftProductDetailsService
  ) {
    this.data = {};
    this.productData = {};
    this.get = false;
    this.isLike = false;
  }
  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.routeConfig?.path?.split('/')[0];
    if (url == 'art-n-craft-product-details') {
      this.get = true;
    }
    if (url == 'mehndi-details') {
      this.get = true;
      this.mehndi = true;
    }
  }
  onFavourite(data: artNcraftProductDetails) {
    this.isLike = !this.isLike;
    if (this.isLike == true) {
      this.artNCraftProductDetailsService
        .addtoFav(data, data.id)
        .subscribe((res) => {
          res.isLike = true;
          console.log(res);
        });
    }
    // if (this.isLike == true) {
    //   this.artNCraftProductDetailsService
    //     .getCardById(id)
    //     .subscribe((res) => {});
    // }
  }
  onBook() {
    const userdata = JSON.parse(localStorage.getItem('userToken')!);
    if (userdata) {
      this.overlayService.openDialog(MehndiBookingFormContainerComponent);
    } else {
      this.router.navigateByUrl('login');
    }
  }
  onCard(id: number, categoryName: string) {
    this.get = true;
    if (id == 1 && categoryName == 'Birthday Cards') {
      let category = categoryName.split(' ');
      categoryName = category[0] + category[1];
      this.router.navigateByUrl(
        'art-n-craft/art-n-craft-product-details/' + categoryName
      );
    } else if (id == 2 && categoryName == 'Gift Box') {
      let a = categoryName.split(' ');
      categoryName = a[0] + a[1];
      this.router.navigateByUrl(
        'art-n-craft/art-n-craft-product-details/' + categoryName
      );
    } else if (id == 1 && categoryName == 'Simple Designs') {
      let abc = categoryName.split(' ');
      categoryName = abc[0] + abc[1];
      this.router.navigateByUrl(
        'mehndi-designs/mehndi-details/' + categoryName
      );
    } else if (id == 2 && categoryName == 'Bridal Mehndi Designs') {
      let abc = categoryName.split(' ');
      categoryName = abc[0] + abc[1];
      this.router.navigateByUrl(
        'mehndi-designs/mehndi-details/' + categoryName
      );
    } else {
      this.router.navigateByUrl('home');
    }
  }
}
