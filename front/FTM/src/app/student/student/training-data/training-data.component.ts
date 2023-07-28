import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/auth/account.service';
import { ComputeDayService } from 'src/app/shared-modules/services/compute-day.service';

@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss']
})
export class TrainingDataComponent implements OnInit {
  modalStatus:boolean=false;
  companyData:any=
    {
      NameTrainingCompany:this.accountService.getCompanyName,
      TrainingField:this.accountService.getTrainingField,
      AddressCompany:this.accountService.getAddressCompany,
      AcceptanceImg:this.accountService.getAcceptanceImg,
      numDaysTraining:'',
      StartTrain:this.accountService.getStartTrain,
      EndTrain:this.accountService.getEndTrain
    }
    labelBtn:string='تعديل';
  constructor(public accountService:AccountService, private computeDayService:ComputeDayService) { }

  ngOnInit(): void {
    this.companyData.numDaysTraining=this.computeDayService.getDaysDifference(this.companyData.StartTrain, this.companyData.EndTrain);
  }
  updateData(){
    this.modalStatus=true;  
  }
  closedModel(status:any){
    this.modalStatus=status;
  }

}
