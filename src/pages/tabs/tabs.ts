import { Component, Output, EventEmitter } from '@angular/core';
import { Auth } from '../../providers/auth';
import { App, Events } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@Output() ionChange:EventEmitter<any> = new EventEmitter();
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(private auth: Auth, public appCtrl: App) {
    if(!this.auth.loggedIn()){
      this.appCtrl.getRootNav().setRoot(LoginPage);
    }
  }
}
