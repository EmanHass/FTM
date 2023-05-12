import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './student/home/home.component';
import { ProfileComponent } from './student/profile/profile.component';
import { TrainingDataComponent } from './student/training-data/training-data.component';
import { ReportComponent } from './student/report/report.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'trainingdata',
    component:TrainingDataComponent
  },
  {
    path:'report',
    component:ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
