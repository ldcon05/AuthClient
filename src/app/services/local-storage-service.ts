import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})

export default class LocalStorageService {
  setItem(key, value) {
    localStorage.setItem(key, value)
  }

  removeItem(key) {
    localStorage.removeItem(key)
  }

  getItem(key) {
    return localStorage.getItem(key)
  }

}
