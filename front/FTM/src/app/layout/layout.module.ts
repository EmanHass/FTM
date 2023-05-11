import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxUsefulSwiperModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class LayoutModule { }
