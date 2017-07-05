import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    animations: [routerTransition],
  host: {'[@routerTransition]':''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
