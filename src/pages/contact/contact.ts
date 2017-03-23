import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { Auth } from '../../providers/auth';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
event: number;
booth: number;
cordova: any;
selectedBooth: any;
  constructor(public nav: NavController, private platform: Platform, public alert: AlertController, private authService: Auth) {

  }
  ngOnInit(){
    this.authService.getInfo().subscribe(data=>{
      console.log(data)
      this.booth = data.booth
    })
  }

  scan() {
    console.log(this.selectedBooth)
      this.platform.ready().then(() => {
        BarcodeScanner.scan().then((barcodeData)=>{
          console.log(barcodeData.text)
              this.authService.ticketIn(barcodeData.text, this.selectedBooth).subscribe(result =>{
                this.alert.create({
                        title: "Scan Results",
                        subTitle: `Enjoy ${result.result}`,
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
