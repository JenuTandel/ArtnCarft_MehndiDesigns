import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { mehndiDesignsDetails } from '../models/mehndi-designs-details.model';
import { MehndiDesignsDetailsService } from '../services/mehndi-designs-details.service';

@Component({
  selector: 'app-mehndi-designs-details-container',
  templateUrl: './mehndi-designs-details-container.component.html',
  styleUrls: ['./mehndi-designs-details-container.component.scss'],
})
export class MehndiDesignsDetailsContainerComponent {
  public mehndiDetails$!: Observable<mehndiDesignsDetails[]>;
  public tableProperty: Pagination;
  constructor(
    private mehndiDesignsDetailsService: MehndiDesignsDetailsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.tableProperty = new Pagination(0, 0);
  }

  ngOnInit(): void {}

  getBridalMehndiDesigns(tableProperty: Pagination) {
    this.tableProperty = tableProperty;

    if (this.activatedRoute.snapshot.params['categoryname'] == 'BridalMehndi') {
      this.mehndiDetails$ =
        this.mehndiDesignsDetailsService.getBridalMehndiDesigns(
          this.tableProperty
        );
    } else if (
      this.activatedRoute.snapshot.params['categoryname'] == 'SimpleDesigns'
    )
      this.mehndiDetails$ =
        this.mehndiDesignsDetailsService.getSimpleMehndiDesigns(
          this.tableProperty
        );
  }
}
