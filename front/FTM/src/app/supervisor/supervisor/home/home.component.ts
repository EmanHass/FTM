import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btnLabel:string='إضافة أجندة تدريب';
  semesters:any=[
    {
      semesterName:'الفصل الدراسي الأول',
      year:'2021/2022',
      status:'نشط',
      settings:''
    },
    {
      semesterName:'الفصل الدراسي الأول',
      year:'2021/2022',
      status:'نشط',
      settings:''
    },
    {
      semesterName:'الفصل الدراسي الأول',
      year:'2021/2022',
      status:'نشط',
      settings:''
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
