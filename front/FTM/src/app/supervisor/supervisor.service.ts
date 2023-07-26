import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  apiLink=environment.apiLink+"/supervisor/account";
  constructor(private http: HttpClient) { }
  getStdList(supervisorId:any): Observable<any[]>{
    let params = new HttpParams().set('supervisorId', supervisorId);
    return this.http.get<any[]>(`${this.apiLink}/getStudentsBySupervisorId`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }

  getStdById(supervisorId:any,stdId:any):Observable<any>{
    let params = new HttpParams().set('supervisorId', supervisorId).append('studentId', stdId);
    return this.http.get<any[]>(`${this.apiLink}/getStudentByIdFromSupervisor`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }
}
