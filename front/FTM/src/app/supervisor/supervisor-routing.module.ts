import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './supervisor/home/home.component';
import { ProfileComponent } from './supervisor/profile/profile.component';
import { CompanyComponent } from './supervisor/company/company.component';
import { StdDataComponent } from './supervisor/std-data/std-data.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'studentdata',
    component:StdDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
