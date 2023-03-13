import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataCommunications } from 'src/app/core/services/datacommunications.service';
import { OverlayService } from '../../services/overlay.service';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private dataCommunications: DataCommunications,
    private registrationService: RegistrationService,
    private overlayService: OverlayService,
    private router: Router
  ) {}
  onLogout() {
    localStorage.clear();
    this.dataCommunications.islogin.next(false);
    this.overlayService.closeDialog.next(true);
    this.router.navigateByUrl('home');
  }
  onMyProfile() {
    const k = localStorage.getItem('user');
    const c = JSON.parse(k!);
    const id = c?.id;
    this.registrationService.getUserById(id).subscribe((res) => {
      console.log(res);

      this.dataCommunications?.idData?.next(res);
    });
    this.router.navigateByUrl('profile');
  }
  closeOverlay() {
    this.overlayService.closeDialog.next(true);
  }
}
