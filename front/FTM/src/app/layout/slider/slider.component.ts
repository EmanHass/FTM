import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  id:number;
  @Input() companyArr:any;
  @Output() companyId:EventEmitter<number>=new EventEmitter<number>;
  @Output() modalStatus:EventEmitter<boolean>=new EventEmitter<boolean>;
  imageSrc=`${environment.apiImage}/images/`;

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true,
      type: 'bullets',
    },
    spaceBetween: 15,
    slidesPerView: 'auto',
      autoplay: {
       delay: 3000,
      },
      loop: true,
  };
  constructor() { }

  ngOnInit(): void {    
  }

  openModal(idImg:number){
    this.modalStatus.emit(true);
    this.id= idImg;
    this.companyId.emit(this.id);
    console.log('modal open clicked', idImg); 
  }
}
