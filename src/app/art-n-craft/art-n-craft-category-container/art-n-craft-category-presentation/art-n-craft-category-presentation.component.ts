import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { artncraftCategory } from '../../models/art-n-craft-category.model';

@Component({
  selector: 'app-art-n-craft-category-presentation',
  templateUrl: './art-n-craft-category-presentation.component.html',
  styleUrls: ['./art-n-craft-category-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtNCraftCategoryPresentationComponent implements OnInit {
  @Input() public set artncraftDataResponse(
    artncraftDataResponse: artncraftCategory[] | null
  ) {
    if (artncraftDataResponse) {
      this._artncraftDataResponse = this._artncraftDataResponse.concat(
        artncraftDataResponse
      );
    }
  }
  public get artncraftDataResponse(): artncraftCategory[] {
    return this._artncraftDataResponse;
  }
  @Output()
  public getartnCraftData: EventEmitter<Pagination>;

  public tableProperty: Pagination;
  public distance: number = -0.5;
  // distance = 2;
  public throttle: number = 0;
  // throttle = 0;
  private _artncraftDataResponse: artncraftCategory[];

  constructor() {
    this.getartnCraftData = new EventEmitter<Pagination>();
    this.tableProperty = new Pagination(1, 8);
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 8;
    this._artncraftDataResponse = [];
  }
  ngOnInit(): void {
    this.getartnCraftData.emit(this.tableProperty);
  }
  onScroll(ev: any) {
    console.log(ev);
    console.log('scroled');

    this.tableProperty.pageNumber;
    this.tableProperty.pageNumber += 1;
    console.log(this.tableProperty.pageNumber);

    this.getartnCraftData.emit(this.tableProperty);
  }
}
