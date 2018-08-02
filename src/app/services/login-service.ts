import { Injectable, EventEmitter } from '@angular/core'

import LocalStorageService from './local-storage-service';


@Injectable({
  providedIn: 'root',
})
export default class LoginService {

  loggedEvent = new EventEmitter<{}>();

  constructor(private localStorageService: LocalStorageService) {}

  loggedUserKey = "loggedUser";

  login(user) {
    this.localStorageService.setItem(this.loggedUserKey, JSON.stringify(user))
  }

  logout() {
    this.localStorageService.removeItem(this.loggedUserKey)
  }

  getCurrentUser() {
    return this.localStorageService.getItem(this.loggedUserKey)
  }

}
