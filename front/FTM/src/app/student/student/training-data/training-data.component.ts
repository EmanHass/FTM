import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss']
})
export class TrainingDataComponent implements OnInit {
  supervisorData:any=
    {
      name:'يوسف أبو سلطان',
      email:'yousef@gmail.com',
      phone:'0592894843'
    }
  companyData:any=
    {
      name:'شركة جوال الفلسطينية',
      field:'التصميم والبرمجة',
      numDaysTraining:'29 يوم',
      startTraining:'2022-06-20',
      endTraining:'2022-08-2'
    }
    labelBtn:string='تعديل';
  constructor() { }

  ngOnInit(): void {
  }

}
