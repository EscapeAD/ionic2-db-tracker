import { Component } from '@angular/core';
import { App, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: Auth, private alert: AlertController, public appCtrl: App) {}

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
      this.appCtrl.getRootNav().setRoot(TabsPage);
  }, err => {
    if(err){
      this.alert.create({
          title: 'Error Loggin In:',
          subTitle: JSON.parse(err._body).errors,
          buttons: ['OK']
        })
        .present();
    }
  })
  }

}
