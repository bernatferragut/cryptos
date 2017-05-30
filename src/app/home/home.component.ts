import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  bitCoinPrice: any;
  etherPrice: any;

  constructor(  private _timeApiService: TimeApiService,
                private _cryptoService: CryptoApiService ) { }

  ngOnInit() { 
    this.upDate();
   }

  upDate() {
    this.currentDate = this._timeApiService.getDateTime()
    .subscribe( res => this.currentDate = res.date);

    this.currentTime = this._timeApiService.getDateTime()
    .subscribe( res => this.currentTime = res.time);

    this.bitCoinPrice = this._cryptoService.getBitcoinPrice()
    .subscribe( res => this.bitCoinPrice = res);
    console.log(this.bitCoinPrice.last);

    this.etherPrice = this._cryptoService.getEthereumPrice()
    .subscribe( res => this.etherPrice = res);
    console.log(this.etherPrice);
  }

}
