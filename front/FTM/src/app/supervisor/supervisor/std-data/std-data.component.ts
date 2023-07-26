import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../supervisor.service';
import { AccountService } from 'src/app/auth/account.service';

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
  constructor(public superVisorService:SupervisorService,private accountService:AccountService) { }

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
    this.superVisorService.getStdById(this.supervisorId,stdId).subscribe(
      (res:any)=>{
        this.studentData=res;                
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
    this.openModal(id);
    this.showRatingModal=true;
  }
  closeModal(){
    this.showstdDataModal=false;
    this.showRatingModal=false;
  }

}
