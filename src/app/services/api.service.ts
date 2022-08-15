import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {
    // this.sendHttpGetRequest().subscribe((data) => console.log(data))
  }
  
  sendHttpGetRequest(route: string = "") {
    // return this.http.get<Config>(this.configUrl);
    return this.http.get("http://localhost:4000/events/user-tag?userid=3");
  }

}
