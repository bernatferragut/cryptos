import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CryptoApiService {

  timer = Observable.timer(0, 1000);

  constructor( private _http: Http ) { }

  getBitcoinPrice() {
    return this._http.get('https://www.bitstamp.net/api/ticker')
    .map( (res: Response) => res.json() );
  }

  getEthereumPrice() {
    return this._http.get('https://etherchain.org/api/basic_stats').map( (res: Response) => res.json() );
  }

  ////////////////////////////////////////

  getNewValue = () => {
    return Observable
      .interval(2000)
      .flatMap((i) => this._http.get('https://www.bitstamp.net/api/ticker'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }

    getNewValue2 = () => {
    return this.timer
      .flatMap((i) => this._http.get('https://www.bitstamp.net/api/ticker'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }


}