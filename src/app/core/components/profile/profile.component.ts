import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private loginService: LoginService,
    private overlayService: OverlayService
  ) {}
  onLogout() {
    localStorage.removeItem('userToken');
    this.loginService.islogin.next(false);
    this.overlayService.closeDialog.next(true);
  }
}
