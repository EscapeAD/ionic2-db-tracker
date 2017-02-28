import { Component, OnInit } from '@angular/core';
import { Auth } from '../../providers/auth';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  events:Object;
  tickets:Object;
  doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData:number[] = [350, 450, 100];
  doughnutChartType:string = 'doughnut';

  constructor(public navCtrl: NavController, private authService: Auth) {

  }
 ngOnInit(){
   this.authService.getInfo().subscribe(data =>{
     console.log(data)
     this.events  = data.events
     this.tickets = data.tickets
   })
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
