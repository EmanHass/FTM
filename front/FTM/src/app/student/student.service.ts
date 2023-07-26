import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiLink=environment.apiLink+"/student/account";

  constructor(private http: HttpClient) { }
  updateCompanyInfo(trainingInfo:any): Observable<any[]>{
    return this.http.post<any[]>(`${this.apiLink}/updateCompanyInformation`,trainingInfo,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    });
  }
}
