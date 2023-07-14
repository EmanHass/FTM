import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
