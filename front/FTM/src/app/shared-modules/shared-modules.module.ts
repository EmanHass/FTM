import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ViewComponent } from './components/agenda/view/view.component';
import { EditComponent } from './components/agenda/edit/edit.component';
import { AddComponent } from './components/agenda/add/add.component';


@NgModule({
  declarations: [
    AgendaComponent,
    ViewComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
