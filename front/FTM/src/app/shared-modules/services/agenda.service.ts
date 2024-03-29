import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  apiLink=environment.apiLink+"/supervisor/Agenda";
  constructor(private http: HttpClient) { }
  getAgenda(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiLink}/GetAgenda`, {
      observe: 'body',
    });
  }

  addAgenda(newAgenda:any):Observable<any[]>{
    return this.http.post<any>(`${this.apiLink}/AddAgenda`, newAgenda,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  updateAgenda(id:number,updateData:any):Observable<any>{
    let params = new HttpParams().set('id', id);

    return this.http.put(`${this.apiLink}/UpdateAgenda/${id}`,updateData,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
      params: params
    });
  }
  deleteAgenda(id:number):Observable<any>{
    return this.http.delete(`${this.apiLink}/Delete/${id}`);
  }
}
