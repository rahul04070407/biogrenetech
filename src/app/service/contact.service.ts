import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://192.168.13.62:8080/v-query/api/open/findByAllActiveQuestion';

  constructor(private http: HttpClient) { }

  getAllActiveQuestions(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const params = new HttpParams().set('name', 'BIOGRENETECH');

    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
