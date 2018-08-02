import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import User from '../../models/user.model';
import HttpService from '../../services/http-service';
import LoginService from '../../services/login-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, User {

  name: string;
  username: string;
  email: string;
  password: string;
  error: string;

  constructor(private httpService: HttpService, private loginService: LoginService,
    private route: Router) { }

  ngOnInit() {
  }

  register() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    this.httpService
      .post('api/register', user)
      .subscribe(
        userRegister => {
          this.loginService.login(userRegister);
          this.loginService.loggedEvent.emit(userRegister)
          this.route.navigate(['home'])
        }
      )
  }

}
