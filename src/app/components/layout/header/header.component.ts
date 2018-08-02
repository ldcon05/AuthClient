import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import LoginService from '../../../services/login-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedUser: string;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loggedUser = this.loginService.getCurrentUser();
    this.loginService.loggedEvent.subscribe(
      loggedUser => { this.loggedUser = loggedUser }
    )
  }

  logout() {
    this.loginService.logout()
    this.loggedUser = null;
    this.route.navigate(['/'])
  }

}
