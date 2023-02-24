import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { mehndiDesignCategory } from '../../models/mehndi-designs-category.model';

@Component({
  selector: 'app-mehndi-designs-category-presentation',
  templateUrl: './mehndi-designs-category-presentation.component.html',
  styleUrls: ['./mehndi-designs-category-presentation.component.scss'],
})
export class MehndiDesignsCategoryPresentationComponent {
  @Input() public set mehndiDesignsDataResponse(
    mehndiDesignsDataResponse: mehndiDesignCategory[] | null
  ) {
    if (mehndiDesignsDataResponse) {
      this._mehndiDesignsDataResponse = this._mehndiDesignsDataResponse.concat(
        mehndiDesignsDataResponse
      );
    }
  }
  public get mehndiDesignsDataResponse(): mehndiDesignCategory[] {
    return this._mehndiDesignsDataResponse;
  }
  @Output()
  public getmehndiDesignsData: EventEmitter<Pagination>;

  public tableProperty: Pagination;
  public distance: number = -0.5;
  // distance = 2;
  public throttle: number = 0;
  // throttle = 0;
  private _mehndiDesignsDataResponse: mehndiDesignCategory[];

  constructor() {
    this.getmehndiDesignsData = new EventEmitter<Pagination>();
    this.tableProperty = new Pagination(1, 8);
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 8;
    this._mehndiDesignsDataResponse = [];
  }
  ngOnInit(): void {
    this.getmehndiDesignsData.emit(this.tableProperty);
  }
  onScroll() {
    this.tableProperty.pageNumber += 1;
    this.getmehndiDesignsData.emit(this.tableProperty);
  }
}
