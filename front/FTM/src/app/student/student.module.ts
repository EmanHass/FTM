import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './student/profile/profile.component';
import { HomeComponent } from './student/home/home.component';
import { TrainingDataComponent } from './student/training-data/training-data.component';
import { ReportComponent } from './student/report/report.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentComponent,
    ProfileComponent,
    HomeComponent,
    TrainingDataComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModulesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
