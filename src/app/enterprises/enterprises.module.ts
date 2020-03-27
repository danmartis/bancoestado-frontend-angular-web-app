import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterprisesRoutingModule } from './enterprises-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, } from '@angular/platform-browser';

import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnterprisesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ], 
  exports: [
    PublicModule
  ]
})
export class EnterprisesModule { }
