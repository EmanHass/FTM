import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/auth/account.service';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  labelBtn:string='تقييم';
  error:boolean=false;
  stdId:number;
  msg:boolean=false;
  constructor(private accountService:AccountService, private studentService:StudentService) {
     this.initializationFG();
   }

   initializationFG(): void {
    this.reportForm = new FormGroup({
      numTasksCompleted: new FormControl('', [
        Validators.required,
      ]),  
      trainingEvaluationAndDescription: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.stdId=this.accountService.getUserId();
  }
  submitReport(){
    if(this.reportForm.valid){
      // submit report for this student using id std
      this.studentService.addRating({...this.reportForm.value,studentId:this.stdId.toString()}).subscribe(
        (res:any)=>{
          console.log(res);
          this.msg=true;
          
        },
        error=>{
          console.log(error);
          this.msg=false;
          
        }
      );
    }else{
      this.error=true;
    }
  }

}
