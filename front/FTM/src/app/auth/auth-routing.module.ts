import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student/student.component';
import { SupervisorComponent } from '../supervisor/supervisor/supervisor.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SupervisorGuardService } from '../shared-modules/guards/supervisor/supervisor-guard.service';
import { StudentGuardService } from '../shared-modules/guards/student/student-guard.service';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent,
    loadChildren: ()=> import('../student/student.module').then(m=>m.StudentModule),
    canActivate:[StudentGuardService],
    canLoad:[StudentGuardService],
    data:{permissions:'student'}
  },
  {
    path:'supervisor',
    component:SupervisorComponent,
    loadChildren: ()=> import('../supervisor/supervisor.module').then(s=>s.SupervisorModule),
    canActivate:[SupervisorGuardService],
    canLoad:[SupervisorGuardService],
    data:{permissions:'admin'}   
  },
  {
    path:'forgetpassword',
    component: ForgetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
