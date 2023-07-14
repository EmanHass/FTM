import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isStudent:boolean=true;
  isSupervisor:boolean=false;
  studentForm: FormGroup;
  supervisorForm: FormGroup;
  isIdExist:boolean=false;
  errorMsg:boolean=false;
  emailMsg:boolean=false;
  passwordMsg:boolean=false;
  errorId:boolean=false;

  constructor(private authService:AuthService) {
  this.initializationFGStudent();
  this.initializationFGSupervisor();
  }
  
  initializationFGStudent(): void {
    this.studentForm = new FormGroup({
      idStudentNumber: new FormControl('',[Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.authService.customEmail()
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,this.authService.customValidationPhone(10, 10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      typeOfTraining: new FormControl('', [Validators.required]),
      numOfdaysTraining: new FormControl('', [Validators.required]),
      startTrainingDate: new FormControl('', [Validators.required]),
      endTrainingDate: new FormControl('', [Validators.required]),
      acceptancImg: new FormControl('', [Validators.required]),
    },
    this.authService.checkPassword());
  }
  initializationFGSupervisor(): void {
    this.supervisorForm = new FormGroup({
      supervisorName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,this.authService.customValidationPhone(10, 10)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.authService.customEmail()
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    this.authService.checkPassword());
  }
  ngOnInit(): void {    
  }

  showStudentForm(){
    this.isStudent=true;
    this.isSupervisor=false;

  }
  showSupervisorForm(){
    this.isSupervisor=true;
    this.isStudent=false;
  }
  checkId(){
    if(this.studentForm.value.idStudentNumber){
      this.errorMsg=false;
      if(this.studentForm.value.idStudentNumber == 20180293){
        this.errorId=false;
        //check if id exist so he can complete register
        this.isIdExist=true;
      }else{
        this.errorId=true;
        setTimeout(()=>{
          this.errorId=false;
        },2000);
      }
    }else{
      this.errorMsg=true;
    }
  }
  signup(){

    if(this.isStudent){
      console.log('student', this.studentForm.value);
      // (api)create method of data student to database 
    }else if(this.isSupervisor){
      console.log('supervisor', this.supervisorForm?.value);
      
      // (api)create method of supervisor data to database
    }
  }

}
