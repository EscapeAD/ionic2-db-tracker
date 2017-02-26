import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth } from '../providers/auth';
import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, private auth: Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.auth.loggedIn()) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
