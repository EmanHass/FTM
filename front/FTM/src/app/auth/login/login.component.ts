import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isStudent:boolean=true;
  isSupervisor:boolean=false;
  loginForm: FormGroup;
  errorMsg:string;
  constructor(private authService:AuthService,private accountService:AccountService, private router:Router) {
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
  login(){
    if(this.isStudent){
      //check if student valid and then navigate his to his profile 
      localStorage.setItem('status','student');
    }else{
      //if supervisor then check login info. and convert it to his profile
      localStorage.setItem('status','supervisor');
    }
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      res=>{
        this.accountService.setUserData(res);
        
        if(this.accountService.isAdminRole()){
          this.router.navigate(["/supervisor"]);
        }else if(this.accountService.isStudentRole()){
          this.router.navigate(["/student"])
        }else{
          this.errorMsg="Invalid Email OR Password";
        }
      },
      error=>{
        this.errorMsg="Invalid Email OR Password";
      }
    );
  }

}
