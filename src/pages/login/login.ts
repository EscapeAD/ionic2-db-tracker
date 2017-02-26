import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
password: string;
email: string;
infoForLogin: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: Auth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginSubmit(){
    console.log('submit login');
    console.log(this.email);
    console.log(this.password);
     this.infoForLogin = {
      email: this.email,
      password: this.password
    }
    
  this.authService.logUser(this.infoForLogin).subscribe(returnData => {
    if(returnData.success){
      this.authService.storeUserData(returnData.token, returnData.user);
      this.navCtrl.push(HomePage)
    } else {

    }
  })

  }


}
