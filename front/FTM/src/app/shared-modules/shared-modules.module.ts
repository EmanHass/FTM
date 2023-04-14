import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EditComponent } from './components/agenda/edit/edit.component';
import { AddComponent } from './components/agenda/add/add.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AgendaComponent,
    EditComponent,
    AddComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ],
  exports:[
    ModalComponent
  ]
})
export class SharedModulesModule { }
