import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EditComponent } from './components/agenda/edit/edit.component';
import { AddComponent } from './components/agenda/add/add.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AgendaComponent,
    EditComponent,
    AddComponent,
    ModalComponent,
    ButtonComponent,
    ProfileComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    ModalComponent,
    ButtonComponent,
    ProfileComponent,
    SpinnerComponent
  ]
})
export class SharedModulesModule { }
