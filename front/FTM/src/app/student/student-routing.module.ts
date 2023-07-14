import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './student/home/home.component';
import { ProfileComponent } from './student/profile/profile.component';
import { TrainingDataComponent } from './student/training-data/training-data.component';
import { ReportComponent } from './student/report/report.component';
import { StudentGuardService } from '../shared-modules/guards/student/student-guard.service';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate:[StudentGuardService],
    data:{permissions:'student'}
  },
  {
    path:'profile',
    component: ProfileComponent,
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
