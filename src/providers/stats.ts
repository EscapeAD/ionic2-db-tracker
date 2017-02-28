import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the Stats provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Stats {

  constructor(public http: Http, private authService: Auth, private headers: Headers) {
    console.log('Hello Stats Provider');
  }
  getInfo(){
    let headers = new Headers();
    this.authService.loadToken()
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/mobile/home', {headers: headers})
                    .map(res => res.json())
  }
  getStats(){
    let headers = new Headers();
    this.authService.loadToken()
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/mobile/stats', {headers: headers})
                    .map(res => res.json())
  }
  ticketIn(user){
    let headers = new Headers();
    this.authService.loadToken()
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/mobile/ticket', user, {headers: headers})
                    .map(res => res.json())
  }
}
