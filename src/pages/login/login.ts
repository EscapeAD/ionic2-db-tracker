import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
user: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: Auth, private alert: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginSubmit(){
     this.user = {
      email: this.email,
      password: this.password
    }

  this.authService.logUser(this.user).subscribe((data) => {
      this.authService.storeUserData(data.auth_token, data.user);
      this.navCtrl.push(HomePage);
  }, err => {
    if(err){
      this.alert.create({
          title: 'Please Check Login Information',
          subTitle: JSON.parse(err._body).errors,
          buttons: ['OK']
        })
        .present();
    }
  })

  }


}
