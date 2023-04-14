import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idImg:any;
  modalStatus=false;
  requirements=[
    { 
      image:'assets/images/req-training1.jpg',
      desc:`إنهاء الطالب  100 ساعة دراسية بنجاح وتسجيل مساق التدريب الميداني بداية بتوجه الطالب إلى مسؤول التدريب الميداني في القسم وأخذ كتاب عدم ممانعة إلى الشركة التدريبية وإحضار موافقة خطية من الشركة تفييد بقبول الطالب بالتدريب الميداني.`
    },
    { 
      image:'assets/images/req-training3.jpg',
      desc:`قضاء فترة التدريب المحددة لدى جهة التدريب التي عينت له أو تمت الموافقة عليها من قبل إدارة التدريب الصيفي وعدم الانتقال إلى جهة أخرى إلا بعد موافقة رسمية من الكلية وجهة التدريب ويقوم الطالب بجمع المعلومات والعناصر اللازمة لكتابة التقرير النهائي للتدريب الصيفي.`
    },
    { 
      image:'assets/images/req-training3.jpg',
      desc:`لا يسمح للطالب بتغيير جهة التدريب إلا بموافقة المشرف الأكاديمي مغ ضرورة إبلاغه عما قد يواجهه من مشكلات أثناء عملية التدريب والحرص على الإنجاز الكامل لعملية التدريب على النحو الذي يضمن شمولية الاستفادة من مختلف الخبرات التي يتيحها التدريب وتجنب اللجوء إلى الانتقاء بطريقة تحول دون الاستفادة من مهارات وقدرات عملية مهمة.`
    },
    { 
      image:'assets/images/req-training4.jpg',
      desc:`يلزم الطالب بحضور التدريب بالكامل خلال الفترة المسموحة له و تسليم كشف الحضور ونموذج التقييم  بعد تعبئته في مظروف مغلق مختوم من قبل الشركة التدريبية للمشرف الأكاديمي.  `
    },
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

  takeID(value:number){
    this.idImg=value;
  }
  showModal(value:boolean){
    this.modalStatus=value;
  }
  closedModel(status:boolean):void{
    this.modalStatus=status;
  }

}
