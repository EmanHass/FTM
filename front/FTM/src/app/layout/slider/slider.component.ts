import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  id:number;
  @Output() companyId:EventEmitter<number>=new EventEmitter<number>;
  @Output() modalStatus:EventEmitter<boolean>=new EventEmitter<boolean>;;
  sliderImages = [
    {
      src: 'assets/logo/unitone.png',
      alt: 'Unit One',
      id:1
    }, {
      src: 'assets/logo/Newsol.png',
      alt: 'New Solution',
      id:2
    }, {
      src: 'assets/logo/Jawal.png',
      alt: 'Jawal',
      id:3
    }, {
      src: 'assets/logo/NewLine.png',
      alt: 'New Line',
      id:4
    }, {
      src: 'assets/logo/toopoptech.png',
      alt: 'Too Pop Tech',
      id:5
    }  
  ]
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
