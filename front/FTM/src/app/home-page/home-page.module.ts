import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { LayoutModule } from '../layout/layout.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModulesModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomePageModule { }

