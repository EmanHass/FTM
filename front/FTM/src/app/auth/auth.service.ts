import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any;
  constructor() { }

  login(email:string, password:string):Observable<any>{
    // if email and password exist in app then return data (post method)

    if(this.getStatus() == "student"){
      // check if student then look for student information log in api
      this.data= {
        id:1, name:"eman", email:"eman@gmail.com", role:"student", permissions:['student','student.home'], token:'Ad44v8s874qrujnd'
      }
    }
     // check if supervisor then look for supervisor information log in api
     if(this.getStatus() == "supervisor"){
      this.data= {
        id:1, name:"yousef", email:"yousef@gmail.com", role:"admin", permissions:['admin','admin.home'], token:'ew45lfmvi71apok155asdw'
      }
    }
    return of(this.data);
  }

  getStatus(){
    return localStorage.getItem("status");
  }
}
