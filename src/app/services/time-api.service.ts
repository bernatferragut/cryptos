import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeApiService {

  constructor( private _http: Http ) { }

  getDateTime() {
    return this._http.get('http://date.jsontest.com/').map( (res: Response) => res.json() );
  }

}
