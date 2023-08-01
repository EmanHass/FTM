import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiLink=environment.apiLink+"/student/account";
  ratingApiLink=environment.apiLink+"/student/endReport/addEndReport"

  constructor(private http: HttpClient) { }
  updateCompanyInfo(trainingInfo:any): any{
    let formData=new FormData;
    formData.append('UserId',trainingInfo.UserId);
    formData.append('NameTrainingCompany',trainingInfo.NameTrainingCompany);
    formData.append('AddressCompany',trainingInfo.AddressCompany);
    formData.append('AcceptanceImg',trainingInfo.AcceptanceImg);
    formData.append('TrainingField',trainingInfo.TrainingField);
    formData.append('StartTrain',trainingInfo.StartTrain);
    formData.append('EndTrain',trainingInfo.EndTrain);

    return this.http.put<any[]>(`${this.apiLink}/updateCompanyInformation`,formData,{
      reportProgress: true,
      observe: 'events',
    });
  }

  addRating(data:any): Observable<any>{
    return this.http.post<any[]>(this.ratingApiLink,data);
  }
}
