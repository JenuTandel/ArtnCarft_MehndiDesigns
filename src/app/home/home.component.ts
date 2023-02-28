import { Component, OnInit } from '@angular/core';
import { ArtNCraftService } from '../art-n-craft/services/art-n-craft.service';
import { MehndiDesignsService } from '../mehndi-designs/services/mehndi-designs.service';
import { Pagination } from '../shared/models/pagination.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tableProperty: Pagination;
  public artNcraftImg: any;
  public mehndiImg: any;
  constructor(
    private artNcraftService: ArtNCraftService,
    private mehndiService: MehndiDesignsService
  ) {
    this.tableProperty = new Pagination(1, 8);
    this.artNcraftImg = [];
    this.mehndiImg = [];
  }
  ngOnInit(): void {
    this.artNcraftService
      .getArtnCraftData(this.tableProperty)
      .subscribe((res) => {
        res = res.slice(0, 4);
        this.artNcraftImg = res.map((item) => item.categoryimgpath);
      });

    this.mehndiService
      .getMehndiDesignsData(this.tableProperty)
      .subscribe((res) => {
        res = res.slice(0, 4);
        this.mehndiImg = res.map((item) => item.categoryimgpath);
      });
  }
}
