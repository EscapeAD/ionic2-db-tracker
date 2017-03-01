import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { Auth } from '../../providers/auth';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
event: number;
booth: number;
cordova:any;
  constructor(public nav: NavController, private platform: Platform, public alert: AlertController, private authService: Auth) {

  }

  scan() {
      this.platform.ready().then(() => {
        BarcodeScanner.scan().then((barcodeData)=>{
          console.log(barcodeData.text)
              this.authService.ticketIn(barcodeData.text).subscribe(result =>{
                this.alert.create({
                        title: "Scan Results",
                        subTitle: `Enjoy ${result}`,
                        buttons: ["Close"]
                    }).present();
              }, err => {
                this.alert.create({
                        title: "Scan Results",
                        subTitle: "Uable to Find User or Error",
                        buttons: ["Close"]
                    }).present();
              })
          }, (error) => {
          this.alert.create({
                  title: "Attention!",
                  subTitle: error,
                  buttons: ["Close"]
              }).present();
          })
      });
  }
}
