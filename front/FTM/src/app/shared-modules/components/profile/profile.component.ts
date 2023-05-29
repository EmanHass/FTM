import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  passwordLabel:string='تغيير كلمة المرور';
  showPassModal:boolean=false;
  phoneLabel:string='تغيير رقم الهاتف';
  showPhoneModal:boolean=false;
  isEditPhone:boolean=false;
  isEditPass:boolean=false;
  getStatus:string;
  constructor() { }

  ngOnInit(): void {
    this.getStatus=localStorage.getItem("status");
  }
  closeModal(){
    this.showPassModal=false;
    this.showPhoneModal=false;
    this.isEditPass=false;
    this.isEditPhone=false;
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
    this.isEditPass=true;
    this.isEditPhone=false;
    setTimeout(()=>{
      this.closeModal();
    },2000);
  }
  successEditPhone(){
    this.isEditPhone=true;
    this.isEditPass=false;
    setTimeout(()=>{
      this.closeModal();
    },2000);
  }

}
