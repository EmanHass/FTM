import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  requirements=[
    { 
      image:'assets/images/req-img.jpg',
      desc:`إنهاء الطالب  100 ساعة دراسية بنجاح وتسجيل مساق التدريب الميداني بداية بتوجه الطالب إلى مسؤول التدريب الميداني في القسم وأخذ كتاب عدم ممانعة إلى الشركة التدريبية وإحضار موافقة خطية من الشركة تفييد بقبول الطالب بالتدريب الميداني.`
    },
    { 
      image:'assets/images/req-img.jpg',
      desc:`قضاء فترة التدريب المحددة لدى جهة التدريب التي عينت له أو تمت الموافقة عليها من قبل إدارة التدريب الصيفي وعدم الانتقال إلى جهة أخرى إلا بعد موافقة رسمية من الكلية وجهة التدريب ويقوم الطالب بجمع المعلومات والعناصر اللازمة لكتابة التقرير النهائي للتدريب الصيفي.`
    },
    { 
      image:'assets/images/req-img.jpg',
      desc:`لا يسمح للطالب بتغيير جهة التدريب إلا بموافقة المشرف الأكاديمي مغ ضرورة إبلاغه عما قد يواجهه من مشكلات أثناء عملية التدريب والحرص على الإنجاز الكامل لعملية التدريب على النحو الذي يضمن شمولية الاستفادة من مختلف الخبرات التي يتيحها التدريب وتجنب اللجوء إلى الانتقاء بطريقة تحول دون الاستفادة من مهارات وقدرات عملية مهمة.`
    },
    { 
      image:'assets/images/req-img.jpg',
      desc:`يلزم الطالب بحضور التدريب بالكامل خلال الفترة المسموحة له و تسليم كشف الحضور ونموذج التقييم  بعد تعبئته في مظروف مغلق مختوم من قبل الشركة التدريبية للمشرف الأكاديمي.  `
    },
  ];

  
  sliderImages = [
    {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 1',
    }, {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 2'
    }, {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 3'
    }, {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 4'
    }, {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 5'
    }, {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 6'
    } , {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 6'
    } , {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 6'
    } , {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 6'
    } , {
      src: 'assets/images/req-img.jpg',
      alt: 'Image 6'
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

  openModal(){
    console.log('modal');
    
  }

}
