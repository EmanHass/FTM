import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  passwordForm:FormGroup;
  phoneFrom:FormGroup;
  passwordLabel:string='تغيير كلمة المرور';
  showPassModal:boolean=false;
  phoneLabel:string='تغيير رقم الهاتف';
  showPhoneModal:boolean=false;
  isEditPhone:boolean=false;
  isEditPass:boolean=false;
  getStatus:string;
  error:boolean=false;
  errorCurrentPass:boolean=false;
  constructor(private authService:AuthService) { 
    this.initializationFGChangePassword();
    this.phoneFrom=new FormGroup({
      phoneNumber: new FormControl('', [Validators.required,this.authService.customValidationPhone(10, 10)]),
    });
  }
  ngOnInit(): void {
    this.getStatus=localStorage.getItem("status");
  }

  initializationFGChangePassword(): void {
    this.passwordForm = new FormGroup({
      currentPassword: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
    },
    this.authService.checkPassword());
  }

  closeModal(){
    this.showPassModal=false;
    this.showPhoneModal=false;
    this.isEditPass=false;
    this.isEditPhone=false;
    this.passwordForm.reset();
    this.phoneFrom.reset();
  }
  editPassword(){
    this.showPassModal=true;
    this.showPhoneModal=false;
  }
  editPhone(){
    this.showPhoneModal=true;
    this.showPassModal=false;
  }
  successEditPass(){    
      if(this.passwordForm.valid){
        if(this.checkUserPassword()){ // check from api if current password correct
          this.isEditPass=true;
          this.isEditPhone=false;
          this.errorCurrentPass=false;
          setTimeout(()=>{
            this.closeModal();
            this.passwordForm.reset();
          },2000);

        }else{
          this.errorCurrentPass=true;
        } 
      }else{
        this.error=true;
        setTimeout(()=>{
          this.error=false;
        },2000);
      }

  }
  successEditPhone(){
    if(this.phoneFrom.valid){
      if(this.authService.getStatus() == 'student'){
        // update method to update phone number for student
      }else{
        // update method to update phone for supervisor
      }
      this.error=false;
      this.isEditPhone=true;
      this.isEditPass=false;
      setTimeout(()=>{
        this.closeModal();
        this.phoneFrom.reset();
      },2000);
    }else{
      this.error=true;
    }
  }

  checkUserPassword():boolean{
    const currentPAssword=this.passwordForm.value.currentPassword;
    if(this.authService.getStatus() == 'student'){
      // check if current password correct (check from api to student)
      if( currentPAssword == '123456'){
        return true;
      }else{
        return false;
      }
    }else{
      // check if current password correct (check from api to supervisor)
      if( currentPAssword == '456'){
        return true;
      }else{
        return false;
      } 
      }
  }
}
