import { Component, OnInit } from '@angular/core';
import { TimeApiService } from './../services/time-api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  bitCoinPrice: any;

  constructor( private _timeApiService: TimeApiService, private _cryptoService: CryptoApiService) {
    // this._timeApiService = _timeApiService;
    // this._cryptoService = _cryptoService;
  }

  ngOnInit() {  }

  callHttService(): void {
    this.currentDate = this._timeApiService.getDateTime()
    .subscribe( res => this.currentDate = res.date);

    this.currentTime = this._timeApiService.getDateTime()
    .subscribe( res => this.currentTime = res.time);
  }

  callCryptoService() {
    this.bitCoinPrice = this._cryptoService.getBitcoinPrice()
    .subscribe( res => this.bitCoinPrice = res);
    console.log(this.bitCoinPrice.last);
  }

}
