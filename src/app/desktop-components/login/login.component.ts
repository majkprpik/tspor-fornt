import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from '../../models/UserLoginModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login({email: this.email, password: this.pass})
  }

}
