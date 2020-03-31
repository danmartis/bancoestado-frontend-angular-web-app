import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { PersonalConfigRoutingModule } from './personal-config-routing.module';

import { PersonalConfigComponent } from './personal-config.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersComponent } from './users/users.component';
import { BillerComponent } from './biller/biller.component';
import { InfoItemComponent } from './info-item/info-item.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    UsersComponent,
    BillerComponent,
    InfoItemComponent,
    PersonalConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PersonalConfigRoutingModule,
  ],
  exports: []
})
export class PersonalConfigModule { }