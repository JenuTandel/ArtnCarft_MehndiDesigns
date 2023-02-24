import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() data: any;
  constructor(private router: Router) {
    this.data = {};
  }
  ngOnInit(): void {}
  onCard(id: number, categoryName: string) {
    console.log(id, categoryName);

    if (id == 1 && categoryName == 'Birthday Cards') {
      let category = categoryName.split(' ');
      categoryName = category[0] + category[1];
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
  }
}
