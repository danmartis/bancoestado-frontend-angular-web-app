import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersComponent } from './users/users.component';
import { BillerComponent } from './biller/biller.component';
import { PersonalConfigComponent } from './personal-config.component';


const routes: Routes = [
  {
    path: '', component: PersonalConfigComponent,
    children: [
      { path: '', redirectTo: 'mi-perfil', component: MyProfileComponent },
      { path: 'mi-perfil',  component: MyProfileComponent },
      { path: 'usuarios', component: UsersComponent },
      { path: 'empresa', component: BillerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalConfigRoutingModule { }