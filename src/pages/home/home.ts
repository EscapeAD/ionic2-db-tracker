import { Component } from '@angular/core';
import { Auth } from '../../providers/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: Auth) {
  }

}
