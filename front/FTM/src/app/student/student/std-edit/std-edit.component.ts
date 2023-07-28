import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';
import { AccountService } from 'src/app/auth/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.scss']
})
export class StdEditComponent implements OnInit {
  @Input() comapnyData:any;
  @Output() closedModal:EventEmitter<boolean>=new EventEmitter<boolean>;
  updateCompanyData: FormGroup;
  labelBtn:string='تعديل';
  isUpdate:boolean=false;
  modalStatus:boolean=false;
  id:any;
  selectedFile:string;
  srcImg:string=environment.apiImage;
  constructor(private studentService:StudentService, private accountService:AccountService) {
     this.initializationFG();
   }

   initializationFG(): void {
    this.updateCompanyData = new FormGroup({
      NameTrainingCompany: new FormControl('', [Validators.required,]),  
      AddressCompany: new FormControl('', [Validators.required]),
      TrainingField: new FormControl('', [Validators.required]),
      AcceptanceImg: new FormControl('',[Validators.required]),
      // description: new FormControl('', [Validators.required]),
      numDaysTraining: new FormControl('', [Validators.required]),
      StartTrain: new FormControl('', [Validators.required]),
      EndTrain: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id=this.accountService.getUserId();
    const startTrainingDate= formatDate(this.comapnyData.StartTrain,'yyyy-MM-dd', 'en');
    const endTrainingDate =  formatDate(this.comapnyData.EndTrain,'yyyy-MM-dd', 'en');
    this.updateCompanyData.setValue({...this.comapnyData,StartTrain:startTrainingDate,EndTrain:endTrainingDate});
  }
  closeModal():void{
    this.closedModal.emit(this.modalStatus);
  }
  update(){
    if(this.updateCompanyData.valid){
      console.log('values of form',this.updateCompanyData.value);
      const newInfo={...this.updateCompanyData.value, UserId:this.id};
      console.log('new info',newInfo); 
      
      this.studentService.updateCompanyInfo(newInfo).subscribe(
        (res:any)=>{
          console.log(res);
          
        },
        error=>{
          console.log(error);
          
        }
      );
    }
    // this.isUpdate=true;
    //   setTimeout(() => {
    //     this.isUpdate = false;
    //     this.closeModal();
    //   }, 2000);
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0].name;
      // this.selectedFile=`${this.srcImg}/${this.selectedFile}`;
      console.log(this.selectedFile);
      
    }
  }
}
