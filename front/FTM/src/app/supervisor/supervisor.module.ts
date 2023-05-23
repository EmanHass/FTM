import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { HomeComponent } from './supervisor/home/home.component';
import { ProfileComponent } from './supervisor/profile/profile.component';
import { CompanyComponent } from './supervisor/company/company.component';
import { StdDataComponent } from './supervisor/std-data/std-data.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';


@NgModule({
  declarations: [
    SupervisorComponent,
    HomeComponent,
    ProfileComponent,
    CompanyComponent,
    StdDataComponent
  ],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModulesModule
  ]
})
export class SupervisorModule { }
