import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

import User from '../../models/user.model';
import LoginService from '../../services/login-service';
import HttpService from '../../services/http-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, User, OnDestroy {

  email: string;
  password: string;
  error: string;

  constructor(private loginService: LoginService,
    private httpService: HttpService, private route: Router) { }

  ngOnInit() {
    this.loginService.logout()
  }

  login() {
    const user = { email: this.email, password: this.password }
    this.httpService
      .post('api/login', user)
      .subscribe(
        loggedUser => {
          this.loginService.login(loggedUser);
          this.loginService.loggedEvent.emit(loggedUser)
          this.route.navigate(['home'])
        },
        errorSubscribe => {
          this.error = errorSubscribe.error.error;
        }
      )
  }

  ngOnDestroy() {

  }

}
