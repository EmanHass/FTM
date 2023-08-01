import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../supervisor.service';
import { AccountService } from 'src/app/auth/account.service';
import { ComputeDayService } from 'src/app/shared-modules/services/compute-day.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-std-data',
  templateUrl: './std-data.component.html',
  styleUrls: ['./std-data.component.scss']
})
export class StdDataComponent implements OnInit {
  students:any;
  studentData:any;
  showstdDataModal:boolean=false;
  showRatingModal:boolean=false;
  isLoading:boolean=true;
  supervisorId:number;
  numsDayOfTrain:number;
  modalLoading:boolean=false;
  btnLabel='عرض ورقة قبول الشركة';
  showImgModal:boolean=false;
  acceptanceImg:string;
  apiImg=environment.apiImage;
  ratingData:any;

  constructor(public superVisorService:SupervisorService,private accountService:AccountService, private computeDayService:ComputeDayService) { }

  ngOnInit(): void {

    this.supervisorId=this.accountService.getUserId();
    this.superVisorService.getStdList(this.supervisorId).subscribe(
      (res:any)=>{
        this.isLoading=false;
        this.students=res;        
      },error=>{
        console.log(error);
        
      }
    );
  }
  openModal(stdId:number){    
    this.modalLoading=false;
    this.superVisorService.getStdById(this.supervisorId,stdId).subscribe(
      (res:any)=>{
        this.modalLoading=true;
        this.studentData=res;      
        this.numsDayOfTrain=this.computeDayService.getDaysDifference(res.startTrain,res.endTrain);             
      },
      error=>{
        console.log(error);
        
      }
    );
  }
  openstdDataModal(id:number){
    this.openModal(id);
    this.showstdDataModal=true;
  }
  openRatingModal(id:number){
    this.ratingData='';
    this.openModal(id);
    this.showRatingModal=true;
    this.superVisorService.getRatingReport(id).subscribe(
      (res=>{
        console.log(res);
        this.ratingData=res;
        
      }),
      error=>{
        console.log(error);
        
      }
    );
  }
  closeModal(){
    this.showstdDataModal=false;
    this.showRatingModal=false;
  }

  showAcceptanceImg(event:any){
    this.showImgModal=true;
    console.log(this.studentData.acceptanceImg);
    
    this.acceptanceImg=`${this.apiImg}/${this.studentData.acceptanceImg}`;
  }
  closeImgModal(){
    this.showImgModal=false;
  }
}
