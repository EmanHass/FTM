import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  constructor() {
     this.initializationFG();
   }

   initializationFG(): void {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customEmail(),
      ]),  
      newPassword: new FormControl('', [Validators.required]),
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
  confirmEmail(){
    if(this.forgetPasswordForm.get('email').errors){
      this.isEmailVaild = false;
      this.errorMsg=true;
      console.log("if error",this.errorMsg);

    }else{
      // if email valid then redirect to change password
      this.isEmailVaild=true;
      this.errorMsg=false;
    }
  }

  passwordReset(){

  }
}
