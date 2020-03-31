import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersComponent } from './users/users.component';
import { BillerComponent } from './biller/biller.component';
import { PersonalConfigComponent } from './personal-config.component';
import { AuthguardService } from 'src/app/services/helpers/authguard.service';

const routes: Routes = [
  {
    path: '', component: PersonalConfigComponent,  canActivate: [ AuthguardService ],
    children: [
      { path: '', redirectTo: 'mi-perfil', component: MyProfileComponent,  canActivate: [ AuthguardService ] },
      { path: 'mi-perfil',  component: MyProfileComponent,  canActivate: [ AuthguardService ] },
      { path: 'usuarios', component: UsersComponent,  canActivate: [ AuthguardService ] },
      { path: 'empresa', component: BillerComponent,  canActivate: [ AuthguardService ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalConfigRoutingModule { }