import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss']
})
export class TrainingDataComponent implements OnInit {
  modalStatus:boolean=false;
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
      address:'غزة، دوار أبو مازن',
      description:'جوال هي أول شركة اتصالات فلسطينية متخصصة في الاتصالات اللاسلكية، وتدير أعمالها في الضفة الغربية وقطاع غزة، وهي إحدى شركات مجموعة الإتصالات الفلسطينية.',
      numDaysTraining:'29 يوم',
      startTraining:'2022-06-20',
      endTraining:'2022-08-02'
    }
    labelBtn:string='تعديل';
  constructor() { }

  ngOnInit(): void {
  }
  updateData(){
    this.modalStatus=true;  
  }
  closedModel(status:any){
    this.modalStatus=status;
  }

}
