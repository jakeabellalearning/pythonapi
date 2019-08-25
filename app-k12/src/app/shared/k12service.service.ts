import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of,throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class K12serviceService {
  constructor(private http: HttpClient) { }
  getMenuForLoggedIn() : Observable<string>{
    return of("Test")
  }
}
