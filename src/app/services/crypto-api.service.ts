import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class CryptoApiService {

  constructor( private _http: Http ) { }

  getBitcoinPrice() {
    return this._http.get('https://www.bitstamp.net/api/ticker').map( (res: Response) => res.json() );
  }

}