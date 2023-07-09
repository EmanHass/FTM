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
    if(this.isStudent) this.initializationFGStudent();
    else this.initializationFGSupervisor();
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
      phoneNumber: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      typeOfTraining: new FormControl('', [Validators.required]),
      numOfdaysTraining: new FormControl('', [Validators.required]),
      startTrainingDate: new FormControl('', [Validators.required]),
      endTrainingDate: new FormControl('', [Validators.required]),
      acceptancImg: new FormControl('', [Validators.required]),
    });
  }
  initializationFGSupervisor(): void {
    this.supervisorForm = new FormGroup({
      supervisorName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.authService.customEmail()
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
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
      }
    }else{
      this.errorMsg=true;
    }



    // if(this.studentForm.value.idStudentNumber && this.studentForm.value.idStudentNumber == 20180293){
    //   this.isIdExist=true;
    //   this.errorMsg=false;
    // }else if(this.studentForm.value.idStudentNumber == 20180293){
    //   this.errorId=false;
    // }else{
    //   this.errorMsg=true;
    // }


    // if(this.isStudent){
    //   // (api)create method of data student to database 
    // }else if(this.isSupervisor){
    //   // (api)create method of supervisor data to database
    // }
  }

}
