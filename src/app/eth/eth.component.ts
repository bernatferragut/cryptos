import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]':''}
})
export class EthComponent implements OnInit {


  bitCoinPrice: any;
  etherPrice: any;

  constructor( private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }

   getUpdate() {
    this.bitCoinPrice = this._cryptoService.getBitcoinPrice()
      .subscribe((res) => this.bitCoinPrice = res);

    this.etherPrice = this._cryptoService.getEthereumPrice()
      .subscribe((res) => this.etherPrice = res);
  }
}

