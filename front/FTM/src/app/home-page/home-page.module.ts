import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomePageModule { }

