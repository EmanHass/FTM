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
  apiLinkAdmin=environment.apiLink+"/Supervisor/account";
  constructor(private http: HttpClient, private accountservice:AccountService) { }
  changePhoneNumerStd(newPhoneNumer:any): Observable<any[]>{
    let params = new HttpParams().set('userId', this.id).append('newPhoneNumber', newPhoneNumer);
    
    return this.http.put<any[]>(`${this.apiLink}/updateStudenPhoneNumber`,null,{
      params: params
    });
  }
  changePaswwordStd(newPassword:any):Observable<any>{
    return this.http.post<any>(`${this.apiLink}/changePassword?UserId=${this.id}&oldPassword=${newPassword.currentPassword}&newPassword=${newPassword.password}&confirmNewPassword=${newPassword.confirmPassword}`,null);
  }

  changePhoneNumerSupervisor(newPhoneNumer:any): Observable<any[]>{
    let params = new HttpParams().set('SupervisorId', this.id).append('newPhoneNumber', newPhoneNumer);
    
    return this.http.put<any[]>(`${this.apiLink}/updateSupervisorPhoneNumber`,null,{
      params: params
    });
  }

  changePasswordSupervisor(newPassword:any):Observable<any>{
    return this.http.post<any>(`${this.apiLink}/changePassword?SupervisorId=${this.id}&oldPassword=${newPassword.currentPassword}&newPassword=${newPassword.password}&confirmNewPassword=${newPassword.confirmPassword}`,null);
  }
}
