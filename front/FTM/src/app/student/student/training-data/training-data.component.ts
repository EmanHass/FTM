import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/auth/account.service';

@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss']
})
export class TrainingDataComponent implements OnInit {
  modalStatus:boolean=false;
  // supervisorData:any=
  //   {
  //     name:'يوسف أبو سلطان',
  //     email:'yousef@gmail.com',
  //     phone:'0592894843'
  //   }
  companyData:any=
    {
      NameTrainingCompany:this.accountService.getCompanyName,
      TrainingField:this.accountService.getTrainingField,
      AddressCompany:this.accountService.getAddressCompany,
      AcceptanceImg:this.accountService.getAcceptanceImg,
      // description:'جوال هي أول شركة اتصالات فلسطينية متخصصة في الاتصالات اللاسلكية، وتدير أعمالها في الضفة الغربية وقطاع غزة، وهي إحدى شركات مجموعة الإتصالات الفلسطينية.',
      // numDaysTraining:'29 يوم',
      StartTrain:this.accountService.getStartTrain,
      EndTrain:this.accountService.getEndTrain
    }
    labelBtn:string='تعديل';
  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }
  updateData(){
    this.modalStatus=true;  
  }
  closedModel(status:any){
    this.modalStatus=status;
  }

}
