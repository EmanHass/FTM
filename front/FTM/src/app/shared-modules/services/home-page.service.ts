import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<[]>{
    return this.http.get<[]>(`${environment.apiLink}/HomePage/TraningData`, {
      observe: 'body',
    });
  }
}
