import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ContainerPublicComponent } from './container-public/container-public.component';
import { AboutComponent } from './components/about/about.component';
import { BranchOfficesComponent } from './components/branch-offices/branch-offices.component';
import { HelpComponent } from './components/help/help.component';
import { LandingComponent } from './components/landing/landing.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContainerPublicComponent,
    AboutComponent,
    BranchOfficesComponent,
    HelpComponent,
    LandingComponent,
    WhatWeDoComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
