import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private overlayService: OverlayService,
    private router: Router
  ) {}
  onLogout() {
    localStorage.clear();
    this.loginService.islogin.next(false);
    this.overlayService.closeDialog.next(true);
    this.router.navigateByUrl('home');
  }
}
