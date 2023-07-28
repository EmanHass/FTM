import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router:Router) { }
  decodeToken(token:any):any {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  setUserData(data:any):void{
    localStorage.setItem("User Data",JSON.stringify(data));
    const decodedToken = this.decodeToken(data.token);

    const role = decodedToken.Role;
    localStorage.setItem('role',role);
  }
  getUserData():any{
    return JSON.parse(localStorage.getItem("User Data"));
  }
  // getUserRole():string{
  //   return this.getUserData() && this.getUserData().role;
  // }
  getRole():string{
    return localStorage.getItem("role");
  }
  isAdminRole():boolean{
    return this.getRole() == 'Supervisor';
  }
  isStudentRole():boolean{
    return this.getRole() == 'Student';
  }
  setUserToken(token:string):void{
    localStorage.setItem('token',token);
  }
  getUserToken():string{
    return localStorage.getItem('token');
  }
  getUserId():number{
    return this.getUserData().id;
  }
  getName():string{
    return `${this.getUserData().firstName} ${this.getUserData().lastName}`;
  }
  getEmail():string{
    return this.getUserData().email;
  }
  getUniNumber():string{
    return this.getUserData().universityStudentNumber;
  }
  getPhone():string{
    return this.getUserData().phoneNumber;
  }
  setPhone(newPhoneNumber:string):void{
    const userData={...this.getUserData(),phoneNumber:newPhoneNumber};
    localStorage.setItem("User Data",JSON.stringify(userData));
  }
  isLogin():boolean{
    return this.getUserData() != null;
  }
  // getPermissions():string[]{
  //   return this.getUserData().permissions;
  // }
  hasPermission(permission:string):boolean{
    return this.getRole().includes(permission);
  }
 get getSupervisorName():string{
    return this.getUserData().supervisorName;
  }
 get getSupervisorEmail():string{
    return this.getUserData().supervisorEmail;
  }
 get getSupervisorPhone():string{
    return this.getUserData().supervisorPhoneNumber;
  }
  get getCompanyName():string{
    return this.getUserData().nameTrainingCompany;
  }
  get getTrainingField():string{
    return this.getUserData().trainingField;
  }
  get getStartTrain():string{
    return this.getUserData().startTrain;
  }
  get getEndTrain():string{
    return this.getUserData().endTrain;
  }
  get getAddressCompany():string{
    return this.getUserData().addressCompany;
  }
  get getAcceptanceImg():string{
    return this.getUserData().acceptanceImg;
  }
  clear():void{
    localStorage.clear();
  }
  logout():void{
    this.clear();
    this.router.navigate(['/']);
  }
}
