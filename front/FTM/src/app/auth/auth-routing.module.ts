import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../student/student/student.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent,
    loadChildren: ()=> import('../student/student.module').then(m=>m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
