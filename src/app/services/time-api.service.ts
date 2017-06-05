import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class TimeApiService {

  constructor( private _http: Http ) { }

    getDateTime = () => {
    return Observable
      .interval(1 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('http://date.jsontest.com/'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }
}
