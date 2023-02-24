import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { mehndiDesignCategory } from '../models/mehndi-designs-category.model';
import { MehndiDesignsDetailsService } from '../services/mehndi-designs-details.service';
import { MehndiDesignsService } from '../services/mehndi-designs.service';

@Component({
  selector: 'app-mehndi-designs-category-container',
  templateUrl: './mehndi-designs-category-container.component.html',
  styleUrls: ['./mehndi-designs-category-container.component.scss'],
})
export class MehndiDesignsCategoryContainerComponent {
  public mehndiDesignsData$!: Observable<mehndiDesignCategory[]>;
  public tableProperty: Pagination;

  constructor(private mehndiDesignsService: MehndiDesignsService) {
    this.tableProperty = new Pagination(0, 0);
  }
  getmehndiDesignsData(tableProperty: Pagination) {
    this.tableProperty = tableProperty;
    this.mehndiDesignsData$ = this.mehndiDesignsService.getMehndiDesignsData(
      this.tableProperty
    );
  }
}
