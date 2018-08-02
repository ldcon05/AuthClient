import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import LoginService from '../../services/login-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeText: string;

  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      home => { this.homeText = home.home.message }
    )
  }

}
