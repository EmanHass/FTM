import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/auth/account.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   id:number=this.accountservice.getUserId();
  apiLink=environment.apiLink+"/student/account";
  constructor(private http: HttpClient, private accountservice:AccountService) { }
  changePhoneNumer(newPhoneNumer:any): Observable<any[]>{
    let params = new HttpParams().set('userId', this.id).append('newPhoneNumber', newPhoneNumer);
    
    return this.http.post<any[]>(`${this.apiLink}/updateStudenPhoneNumber`,null,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }
  changePaswword(newPassword:any):Observable<any>{
    return this.http.post<any>(`${this.apiLink}/changePassword?UserId=${this.id}&oldPassword=${newPassword.currentPassword}&newPassword=${newPassword.password}&confirmNewPassword=${newPassword.confirmPassword}`,null);
  }
}
