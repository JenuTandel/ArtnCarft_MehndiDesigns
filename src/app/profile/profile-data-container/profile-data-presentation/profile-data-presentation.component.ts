import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationData } from 'src/app/registration/registration.model';
import { ProfileDataPresenterService } from '../profile-data-presenter/profile-data-presenter.service';

@Component({
  selector: 'app-profile-data-presentation',
  templateUrl: './profile-data-presentation.component.html',
  styleUrls: ['./profile-data-presentation.component.scss'],
  viewProviders: [ProfileDataPresenterService],
})
export class ProfileDataPresentationComponent implements OnInit {
  @Output() updatedProfileData: EventEmitter<RegistrationData>;
  public myProfileForm: FormGroup;
  constructor(
    private profileDataPresenterService: ProfileDataPresenterService
  ) {
    this.myProfileForm = this.profileDataPresenterService.buildMyProfileForm();
    this.updatedProfileData = new EventEmitter();
  }
  ngOnInit(): void {
    this.profileDataPresenterService.bindControlValue(this.myProfileForm);
    console.log(this.myProfileForm.value);
  }

  onUpdate() {
    this.updatedProfileData.emit(this.myProfileForm.value);
  }
}
