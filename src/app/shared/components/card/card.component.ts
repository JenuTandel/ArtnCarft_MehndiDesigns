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
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  onFavourite() {
    this.isLike = !this.isLike;
    console.log(this.isLike);
    console.log(this.productData);
  }
  onCard(id: number, categoryName: string) {
    this.get = true;
    if (id == 1 && categoryName == 'Birthday Cards') {
      let category = categoryName.split(' ');
      categoryName = category[0] + category[1];
      this.router.navigateByUrl(
        'art-n-craft/art-n-craft-product-details/' + categoryName
      );
    }
    if (id == 2 && categoryName == 'Gift Box') {
      let a = categoryName.split(' ');
      categoryName = a[0] + a[1];
      this.router.navigateByUrl(
        'art-n-craft/art-n-craft-product-details/' + categoryName
      );
    }
    if (id == 1 && categoryName == 'Simple Designs') {
      let abc = categoryName.split(' ');
      categoryName = abc[0] + abc[1];
      this.router.navigateByUrl(
        'mehndi-designs/mehndi-details/' + categoryName
      );
    }
    // if (this.get == true) {
    //   this.get = false;
    // }
  }
}
