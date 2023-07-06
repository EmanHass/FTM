import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-data',
  templateUrl: './std-data.component.html',
  styleUrls: ['./std-data.component.scss']
})
export class StdDataComponent implements OnInit {
  students:any=[
    {
      name:'أسيل الوديه',
      email:'asil@gmail.com',
      stdNum:20180401,
      id:1,
      companyName:"شركة جوال الفلسطينية",
      fieldTraining:"البرمجة والتصميم",
      numsDay:"29يوم",
      startTraingingDate:"2022-06-20",
      endTrainingDate:"2022-08-02",
      numsTask:"7مهام",
      ratingTraining:"التدريب ممتاز ويوجد متابعة مستمرة من مسؤولي بالتدريب"
    },
    {
      name:'إيمان حسونة',
      email:'eman@gmail.com',
      stdNum:20180293,
      id:2,
      companyName:"شركة جوال الفلسطينية",
      fieldTraining:"البرمجة والتصميم",
      numsDay:"29يوم",
      startTraingingDate:"2022-06-20",
      endTrainingDate:"2022-08-02",
      numsTask:"7مهام",
      ratingTraining:"التدريب ممتاز ويوجد متابعة مستمرة من مسؤولي بالتدريب"
    },
    {
      name:'محمد العطار',
      email:'mohammed@gmail.com',
      stdNum:2018254,
      id:3,
      companyName:"شركة جوال الفلسطينية",
      fieldTraining:"البرمجة والتصميم",
      numsDay:"29يوم",
      startTraingingDate:"2022-06-20",
      endTrainingDate:"2022-08-02",
      numsTask:"7مهام",
      ratingTraining:"التدريب ممتاز ويوجد متابعة مستمرة من مسؤولي بالتدريب"
    }
  ];
  studentData:any;
  showstdDataModal:boolean=false;
  showRatingModal:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  openModal(id:number){
    this.studentData=this.students.find((i:any)=>i.id==id);
  }
  openstdDataModal(id:number){
    this.openModal(id);
    this.showstdDataModal=true;
  }
  openRatingModal(id:number){
    this.openModal(id);
    this.showRatingModal=true;
  }
  closeModal(){
    this.showstdDataModal=false;
    this.showRatingModal=false;
  }

}
