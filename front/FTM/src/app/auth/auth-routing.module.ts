import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student/student.component';
import { SupervisorComponent } from '../supervisor/supervisor/supervisor.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent,
    loadChildren: ()=> import('../student/student.module').then(m=>m.StudentModule)
  },
  {
    path:'supervisor',
    component:SupervisorComponent,
    loadChildren: ()=> import('../supervisor/supervisor.module').then(s=>s.SupervisorModule)   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
