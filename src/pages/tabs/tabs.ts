import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { App } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(private auth: Auth, public appCtrl: App, private nav: NavController) {
    console.log(this.auth.loggedIn())
    if(!this.auth.loggedIn()){
      this.appCtrl.getRootNav().setRoot(LoginPage);
      this.nav.popToRoot();
    }
  }
  logout(){
    this.auth.logout()
    this.appCtrl.getRootNav().setRoot(LoginPage);
    this.nav.popToRoot();
  }
}
