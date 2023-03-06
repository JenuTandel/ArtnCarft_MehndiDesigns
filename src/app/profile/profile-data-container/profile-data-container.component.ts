import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { RegistrationData } from 'src/app/registration/registration.model';
import { SuccessfullyMessageComponent } from 'src/app/shared/components/successfully-message/successfully-message.component';

@Component({
  selector: 'app-profile-data-container',
  templateUrl: './profile-data-container.component.html',
  styleUrls: ['./profile-data-container.component.scss'],
})
export class ProfileDataContainerComponent {
  constructor(
    private registrationService: RegistrationService,
    private overlayService: OverlayService
  ) {}

  updatedProfileData(data: RegistrationData) {
    this.registrationService
      .updateUser(data, data.id)
      .subscribe((res: RegistrationData) => {
        if (res) {
          this.overlayService.openDialog(SuccessfullyMessageComponent);
          setTimeout(() => {
            this.overlayService.closeDialog.next(true);
          }, 2000);
        }
      });
  }
}
