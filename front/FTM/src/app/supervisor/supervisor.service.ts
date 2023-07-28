import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateCompany } from '../shared-modules/model-interface/homePage/company';

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
 
 public addCompany1(createCompany:ICreateCompany){
  let formData=new FormData;
  formData.append('Name',createCompany.name);
  formData.append('Description',createCompany.description);
  formData.append('Email',createCompany.email);
  formData.append('PhoneNumber',createCompany.phoneNumber);
  formData.append('LinkCompany',createCompany.linkCompany);
  formData.append('Address',createCompany.address);
  formData.append('LogoCompany',createCompany.logoCompany);
  formData.append('CompanyCapacity',createCompany.companyCapacity.toString());
  formData.append('FieldsOfTrainings',createCompany.fieldsOfTrainings);

  return this.http.post<any>(`${this.apiCompany}/AddCompany`, formData, {
    reportProgress: true,
    observe: 'events',
  });

 }


  addNewCompany(company:any): Observable<any>{
    return this.http.post<any>(`${this.apiCompany}/AddCompany`,company);
  }
  deleteCompanyById(id:number): Observable<any>{
    return this.http.delete(`${this.apiCompany}/Delete/${id}`);
  }
  updateCompany(company:any,id:any): Observable<any>{
    return this.http.put<any>(`${this.apiCompany}/UpdateRequirement/${id}`,company);
  }
}
