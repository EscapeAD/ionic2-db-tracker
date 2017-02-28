import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
cordova:any;
  constructor(public nav: NavController, private platform: Platform, public alert: AlertController) {

  }

  scan() {
      this.platform.ready().then(() => {
        BarcodeScanner.scan().then((barcodeData)=>{
          this.alert.create({
                  title: "Scan Results",
                  subTitle: barcodeData.text,
                  buttons: ["Close"]
              }).present()
          }, (error) => {
          this.alert.create({
                  title: "Attention!",
                  subTitle: error,
                  buttons: ["Close"]
              }).present()
          });
      });

}
}
