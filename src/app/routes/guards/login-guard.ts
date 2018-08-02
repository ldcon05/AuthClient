import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

import LoginService from '../../services/login-service';

@Injectable({
  providedIn: 'root',
})
export default class LoginGuard implements CanActivate {
  constructor (private loginService: LoginService, private route: Router ) {}

  canActivate() {
    if(!this.loginService.getCurrentUser())
      return true;

    this.route.navigate(['/home'])
    return false;
  }
}
