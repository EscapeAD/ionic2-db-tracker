import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
authToken: any;
user: any;
  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }
  logUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/auth_user', user, {headers: headers})
                    .map(res => res.json())
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user      = user;
  }
  logout(){
  this.authToken = null;
  this.user      = null;
  localStorage.clear();
  }
  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }
  loggedIn(){
  return tokenNotExpired();
  }
}
