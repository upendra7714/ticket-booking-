import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from '../models/apple';



@Injectable({
  providedIn: 'root'
})
export class AppleService {
  private BaseUrl="https://sheetdb.io/api/v1/b94t9l9fare5a";
    constructor(private http:HttpClient) { }
    public Insertion():Observable<Apple[]> {
      return this.http.get<Apple[]>(`${this.BaseUrl}`);
    }
  }
