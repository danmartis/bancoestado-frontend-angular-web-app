import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-config',
  templateUrl: './personal-config.component.html',
  styleUrls: ['./personal-config.component.scss']
})
export class PersonalConfigComponent implements OnInit {


  protected isEditingProfile : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleEditProfile() {
    this.isEditingProfile = !this.isEditingProfile;
    console.log('personal-config this.isEditingProfile: ', this.isEditingProfile)
    if (this.isEditingProfile) {
      console.log('Editing Profile')
    } else {
      console.log('Save Profile changes')
    }
  }

}
