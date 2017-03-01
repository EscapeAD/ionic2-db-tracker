import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
// website:string = 'https://stark-cliffs-78389.herokuapp.com'
website:string = 'http://localhost:3000'
authToken: any;
user: any;
  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }
  logUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.website}/auth_user`, user, {headers: headers})
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
    this.user      = localStorage.getItem('user');
  }
  loggedIn(){
  return tokenNotExpired();
  }
  getInfo(){
    let headers = new Headers();
    this.loadToken()
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.website}/mobile/home`, {headers: headers})
                    .map(res => res.json())
  }
  getStats(){
    let headers = new Headers();
    this.loadToken()
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.website}/mobile/stats`, {headers: headers})
                    .map(res => res.json())
                    .map(data =>{
                      let graph = data.events
                      let tickets = data.tickets
                      let final   = {
                        events: [],
                        tickets: []
                      }
                      graph.forEach((x)=>{
                        final['events'].push(x.name)
                        final['tickets'].push(tickets.filter((y)=> y.event_id == x.id).length)
                      })
                      return final
                    })
  }
  ticketIn(user){
    let headers = new Headers();
    this.loadToken()
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.website}/mobile/ticket`, user, {headers: headers})
                    .map(res => res.json())
  }
}
