import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isStudent:boolean=true;
  isSupervisor:boolean=false;
  loginForm: FormGroup;
  constructor() {
     this.initializationFG();
   }

   initializationFG(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),  
      password: new FormControl('', [Validators.required]),
    });
  }
  customEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && !value.includes('.com')) {
        return { emailCustom: true };
      }
      return null;
    };
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
  submit(){
    console.log(this.isStudent, this.isSupervisor);
    if(this.isStudent){
      //check if student valid and then navigate his to his profile 
    }else{
      //if supervisor then check login info. and convert it to his profile
    }
  }

}
