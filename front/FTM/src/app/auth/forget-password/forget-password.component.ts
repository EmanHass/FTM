import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  label:string="إعادة تعيين كلمة المرور";
  isEmailVaild:boolean=false;
  errorMsg:boolean=false;
  forgetPasswordForm: FormGroup;
  constructor(private authService:AuthService) {
     this.initializationFG();
   }

   initializationFG(): void {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.authService.customEmail()
      ]),  
      newPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    this.authService.checkPassword());
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
  confirmEmail(){
    if(this.forgetPasswordForm.get('email').errors){
      this.isEmailVaild = false;
      this.errorMsg=true;
      console.log("if error",this.errorMsg);

    }else{
      // if email valid then redirect to change password
      this.authService.checkEmail(this.forgetPasswordForm.value.email).subscribe(
        (res:any)=>{
          console.log(res); 
          this.isEmailVaild=true;
          this.errorMsg=false;        
        }, error=>{
          console.log(error);          
        }
      );
    }
  }

  passwordReset(){
    this.authService.confirmPasswordReset(this.forgetPasswordForm.value).subscribe(
      (res:any)=>{
        console.log(res);       
      },
      error=>{
        console.log(error);
        
      }
    );
  }
}
