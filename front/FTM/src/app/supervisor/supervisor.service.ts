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
 
 public addNewCompany(createCompany:ICreateCompany):Observable<any>{
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
  deleteCompanyById(id:number): Observable<any>{
    return this.http.delete(`${this.apiCompany}/Delete/${id}`);
  }
  updateCompany(company:any,id:any): Observable<any>{
    let formData=new FormData;
    formData.append('Id',id);
    formData.append('Name',company.name);
    formData.append('Description',company.description);
    formData.append('Email',company.email);
    formData.append('PhoneNumber',company.phoneNumber);
    formData.append('LinkCompany',company.linkCompany);
    formData.append('Address',company.address);
    formData.append('NewLogo',company.logoCompany);
    // formData.append('CompanyCapacity',company.companyCapacity.toString());
    formData.append('FieldsOfTrainings',company.fieldsOfTrainings);

    return this.http.put<any>(`${this.apiCompany}/UpdateRequirement/${id}`,formData,{
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    });
  }

  getRatingReport(id:number): Observable<any>{
    return this.http.get(`${this.apiLink}/endReport/getEndTrainingReport/?studentId=${id}`);
  }
}
