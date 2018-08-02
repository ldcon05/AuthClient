import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import HttpService from '../../services/http-service';
import LoginService from '../../services/login-service';

@Injectable({
  providedIn: 'root',
})

export default class PostResolverService implements Resolve<{}> {
  constructor( private route: Router, private httpService: HttpService,
    private loginService: LoginService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
    const url = '';
    const user = JSON.parse(this.loginService.getCurrentUser());
    return this.httpService.get(url, user)
  }
}
