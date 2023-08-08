import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Home} from './../model-interface/homePage/home-model'
@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Home[]>{
    return this.http.get<Home[]>(`${environment.apiLink}/HomePage/TraningData`, {
      observe: 'body',
    });
  }
}
