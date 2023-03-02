import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
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
    private loginService: LoginService
  ) {
    this.isLoggedIn = false;
  }
  ngOnInit(): void {
    this.loginService.islogin$.subscribe((res: boolean) => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn);
    });
  }
  onProfile() {
    this.overlayService.openDialog(ProfileComponent);
  }
}
