import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router:Router) { }

  setUserData(data:any):void{
    localStorage.setItem("User Data",JSON.stringify(data));
  }
  getUserData():any{
    return JSON.parse(localStorage.getItem("User Data"));
  }
  getUserRole():string{
    return this.getUserData() && this.getUserData().role;
  }
  isAdminRole():boolean{
    return this.getUserRole() == 'admin';
  }
  isStudentRole():boolean{
    return this.getUserRole() == 'student';
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
  isLogin():boolean{
    return this.getUserData() != null;
  }
  getPermissions():string[]{
    return this.getUserData().permissions;
  }
  hasPermission(permission:string):boolean{
    return this.getPermissions().includes(permission);
  }
  clear():void{
    localStorage.clear();
  }
  logout():void{
    this.clear();
    this.router.navigate(['/']);
  }
}
