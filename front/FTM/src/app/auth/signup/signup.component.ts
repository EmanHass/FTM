import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  checkId:boolean=false;
  constructor() {
    if(this.isStudent) this.initializationFGStudent();
    else this.initializationFGSupervisor();
  }
  initializationFGStudent(): void {
    this.studentForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
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
    this.studentForm = new FormGroup({
      supervisorName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),  
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
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
  signup(){
    this.checkId=true;
  }

}
