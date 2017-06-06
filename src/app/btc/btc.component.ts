import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]':''}
})
export class BtcComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  bitCoinPrice: any;

  constructor(  private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }  

   getUpdate() {
    this.bitCoinPrice = this._cryptoService.getBitcoinPrice()
      .subscribe((res) => this.bitCoinPrice = res);

   }

}
