import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { mehndiDesignsDetails } from '../../models/mehndi-designs-details.model';

@Component({
  selector: 'app-mehndi-designs-details-presentation',
  templateUrl: './mehndi-designs-details-presentation.component.html',
  styleUrls: ['./mehndi-designs-details-presentation.component.scss'],
})
export class MehndiDesignsDetailsPresentationComponent {
  @Input() public set DesignDetailsResponse(
    DesignDetailsResponse: mehndiDesignsDetails[] | null
  ) {
    if (DesignDetailsResponse) {
      this._DesignDetailsResponse = this._DesignDetailsResponse.concat(
        DesignDetailsResponse
      );
    }
  }
  public get DesignDetailsResponse(): mehndiDesignsDetails[] {
    return this._DesignDetailsResponse;
  }

  @Output() getBridalMehndiDesigns: EventEmitter<Pagination>;
  public tableProperty: Pagination;
  public distance: number = -0.5;
  public throttle: number = 0;
  public title: any;
  private _DesignDetailsResponse: mehndiDesignsDetails[];
  constructor(private activatedRoute: ActivatedRoute) {
    this._DesignDetailsResponse = [];
    this.getBridalMehndiDesigns = new EventEmitter<Pagination>();
    this.tableProperty = new Pagination(1, 8);
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 8;
    this.title = '';
  }
  ngOnInit(): void {
    this.getBridalMehndiDesigns.emit(this.tableProperty);
    this.title = this.activatedRoute.snapshot.params['categoryname'];
    this.title = this.title.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
  }
  onScroll() {
    this.tableProperty.pageNumber++;
    this.getBridalMehndiDesigns.emit(this.tableProperty);
  }
}
