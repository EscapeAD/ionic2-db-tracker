import { Component, OnInit } from '@angular/core';
import { Auth } from '../../providers/auth';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  eventNow:Object;
  boothNow:Object;

  constructor(public navCtrl: NavController, private authService: Auth) {
  }

  ngOnInit(){
    this.authService.getInfo().subscribe(data =>{
      this.eventNow = "hi"
      console.log(data);
      this.eventNow = data['event']
      this.boothNow = data['booth']
    })
  }

}
