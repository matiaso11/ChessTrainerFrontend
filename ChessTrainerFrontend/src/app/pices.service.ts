import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChessMoveRequest, ChessMoveResponse } from './Model/Model';

@Injectable({
  providedIn: 'root'
})
export class PicesService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  getItems() : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.get('/api/chesstrainer', httpOptions);
  }

  checkIfCanMove(request :ChessMoveRequest) : Observable<ChessMoveResponse>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<ChessMoveResponse>('/api/chesstrainer',request , httpOptions);
  }

}
