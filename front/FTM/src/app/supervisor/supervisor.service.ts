import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  apiLink=environment.apiLink+"/supervisor";
  apiCompany=this.apiLink+"/Companies"
  constructor(private http: HttpClient) { }
  getStdList(supervisorId:any): Observable<any[]>{
    let params = new HttpParams().set('supervisorId', supervisorId);
    return this.http.get<any[]>(`${this.apiLink}/account/getStudentsBySupervisorId`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }

  getStdById(supervisorId:any,stdId:any):Observable<any>{
    let params = new HttpParams().set('supervisorId', supervisorId).append('studentId', stdId);
    return this.http.get<any[]>(`${this.apiLink}/account/getStudentByIdFromSupervisor`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }

  getCompanyList(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiCompany}/GetTrainingCompany`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    });
  }

  addNewCompany(company:any): Observable<any>{
    return this.http.post<any>(`${this.apiCompany}/AddCompany`,company);
  }
  deleteCompanyById(id:number): Observable<any>{
    return this.http.delete(`${this.apiCompany}/Delete/${id}`);
  }
}
