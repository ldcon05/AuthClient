import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export default class HttpService {

  private url = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  get(url, user) {
    const completeUrl = this.url + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': user.authorization
      })
    }

    return this.http.get(completeUrl, httpOptions)
  }

  post(url, params) {
    const completeUrl = this.url + url;
    return this.http.post(completeUrl, params)
  }
}
