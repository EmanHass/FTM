import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  agenda:any;
  startAgenda:any;
  endAgenda:any;
  constructor() { }

  ngOnInit(): void {
    this.agenda=[
      {
        title:'بداية تسجيل الطلبة للتدريب',
        date:'2022-06-2'
      },
      {
        title:'بداية تدريب الطلبة',
        date:'2022-06-20'
      },
      {
        title:'بداية تسليم الطلبة لتقرير التدريب',
        date:'2022-08-14'
      },
      {
        title:'نهاية تسجيل الطلبة للتدريب',
        date:'2022-06-15'
      },
      {
        title:'نهاية تدريب الطلبة',
        date:'2022-07-2'
      },
      {
        title:'نهاية تسليم الطلبة لتقرير التدريب',
        date:'2022-08-17'
      }
    ];
    this.startAgenda=this.agenda.slice(0,3);
    this.endAgenda=this.agenda.slice(3,this.agenda.length);
  }

}
