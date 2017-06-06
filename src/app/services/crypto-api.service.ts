import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CryptoApiService {

  constructor( private _http: Http ) { }

   // 1.Simple way of creating a http observable

  getBitcoinPrice() {
    return this._http.get('https://www.bitstamp.net/api/ticker')
    .map( (res: Response) => res.json() );
  }

  getEthereumPrice() {
    return this._http.get('https://etherchain.org/api/basic_stats').map( (res: Response) => res.json() );
  }

  // 2.Creating a http observable every x interval of time
  
  getBitcoinPrice2 = () => {
    return Observable
      .interval(30 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('https://www.bitstamp.net/api/ticker'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }

    getEthereumPrice2 = () => {
    return Observable
      .interval(30 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('https://etherchain.org/api/basic_stats'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }

  // 3. Other Data from BTC
}