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
  chartLabels:string[]  = [];
  chartData:number[]    = [];
  chartType:string      = 'doughnut';

  constructor(public navCtrl: NavController, private authService: Auth) {

  }
 ngOnInit(){
   this.authService.getStats().subscribe(data =>{
     // Need to split this in it own service someday.
     data.tickets.forEach((x)=>{
       this.chartData.push(x)
     })
     this.chartLabels = data.events
   })
  }

  ngAfterViewInit() {

  }

  ngOnChanges(){

  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
