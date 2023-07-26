import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/auth/account.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiLink=environment.apiLink+"/student/account/updateStudenPhoneNumber";
  constructor(private http: HttpClient, private accountservice:AccountService) { }
  changePhoneNumer(newPhoneNumer:any): Observable<any[]>{
    const id:number=this.accountservice.getUserId();
    let params = new HttpParams().set('userId', id).append('newPhoneNumber', newPhoneNumer);
    
    return this.http.post<any[]>(`${this.apiLink}`,null,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }
}
