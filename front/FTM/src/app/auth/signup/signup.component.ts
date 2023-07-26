import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

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
  isLoading:boolean=false;

  constructor(private authService:AuthService, private accountService:AccountService,private router:Router) {
  this.initializationFGStudent();
  this.initializationFGSupervisor();
  }
  
  initializationFGStudent(): void {
    this.studentForm = new FormGroup({
      UniversityStudentNum: new FormControl('',[Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.authService.customEmail()
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,this.authService.customValidationPhone(10, 10)]),
      nameTrainingCompany: new FormControl('', [Validators.required]),
      addressCompany: new FormControl('', [Validators.required]),
      trainingField: new FormControl('', [Validators.required]),
      // numOfdaysTraining: new FormControl('', [Validators.required]),
      startTrain: new FormControl('', [Validators.required]),
      endTrain: new FormControl('', [Validators.required]),
      acceptanceImg: new FormControl('', [Validators.required]),
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
    const id=this.studentForm.value.UniversityStudentNum; 
    if(id){
      this.isLoading=true;
      this.errorMsg=false;
      this.checkStdIdAPI(id);                    
    }else{
      this.errorMsg=true;
    }
  }
  checkStdIdAPI(id:string):any{
    this.authService.checkStdNum(id).subscribe(
      res=>{
        if(res){
          this.isLoading=false;
          this.errorId=false;
          //check if id exist so he can complete register
          this.isIdExist=true;
          console.log(this.studentForm.value);
          
        }else{
          this.errorId=true;
          this.isLoading=false;
          setTimeout(()=>{
            this.errorId=false;
          },2000);
        }
      }
    )
  }
  signup(){

    if(this.isStudent){
      console.log(this.studentForm.value);    
      const formValues = { ...this.studentForm.value };
      delete formValues.UniversityStudentNum;
      this.authService.signup(formValues,this.studentForm.value.UniversityStudentNum).subscribe(
        (res:any)=>{
          console.log('success signup');
          this.accountService.setUserData(res);
          this.router.navigate(["/student"]);

        },error=>{
          console.log(error);
          
        }
      ); 
    }else if(this.isSupervisor){
      console.log('supervisor', this.supervisorForm?.value);
      
      // (api)create method of supervisor data to database
    }
  }



}
