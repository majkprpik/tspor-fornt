import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginModel } from '../../models/UserLoginModel'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  login(user: UserLoginModel) {
    // return this.http.get<Config>(this.configUrl);
    return this.http.post("http://localhost:4000/users/login", user).subscribe(data =>  {
      if(data != null) {
        this.router.navigate(["dashboard"]);
      }
    });
  }

  register() {
    // return this.http.get<Config>(this.configUrl);
    return this.http.get("http://localhost:4000/events/user-tag?userid=3");
  }

  logout() {
    // return this.http.get<Config>(this.configUrl);
    return this.http.get("http://localhost:4000/events/user-tag?userid=3");
  }
}