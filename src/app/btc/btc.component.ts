import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css']
})
export class BtcComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  bitCoinPrice: any;
  etherPrice: any;

  constructor(  private _timeApiService: TimeApiService,
                private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }  

   getUpdate() {
    this.bitCoinPrice = this._cryptoService.getBitcoinPrice()
      .subscribe((res) => this.bitCoinPrice = res);

    this.etherPrice = this._cryptoService.getEthereumPrice()
      .subscribe((res) => this.etherPrice = res);

    this.currentDate = this._timeApiService.getDateTime()
      .subscribe( res => this.currentDate = res.date);

    this.currentTime = this._timeApiService.getDateTime()
      .subscribe( res => this.currentTime = res.time);
   }

}
