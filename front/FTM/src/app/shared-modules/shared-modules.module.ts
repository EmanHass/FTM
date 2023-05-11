import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EditComponent } from './components/agenda/edit/edit.component';
import { AddComponent } from './components/agenda/add/add.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AgendaComponent,
    EditComponent,
    AddComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    HttpClientModule
  ],
  exports:[
    ModalComponent
  ]
})
export class SharedModulesModule { }
