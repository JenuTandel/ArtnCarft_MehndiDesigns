import { Component, OnInit } from '@angular/core';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { OverlayService } from '../../services/overlay.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(
    private overlayService: OverlayService,
    private dataCommunications: DataCommunications
  ) {
    this.isLoggedIn = false;
  }
  ngOnInit(): void {
    if (localStorage.getItem('userToken')) {
      this.isLoggedIn = true;
    }
    this.dataCommunications.islogin$.subscribe((res: boolean) => {
      this.isLoggedIn = res;
    });
  }
  onProfile() {
    this.overlayService.openDialog(ProfileComponent);
  }
}
