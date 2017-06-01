import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class TimeApiService {

  constructor( private _http: Http ) { }

    getDateTime() {
        return this._http.get('http://date.jsontest.com/')
          .map( (res: Response) => res.json() );
    }
}
