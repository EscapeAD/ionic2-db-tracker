import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Auth } from '../../providers/auth';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit, AfterViewInit {
  events:Object;
  tickets:Object;
  chartLabels:string[]  = [];
  chartData:number[]    = [];
  chartType:string      = 'doughnut';
  @ViewChild("myCanvas") myCanvas;

  constructor(public navCtrl: NavController, private authService: Auth) {

  }
 ngOnInit(){
   this.authService.getStats().subscribe(data =>{
     // Need to split this in it own service someday.
     this.chartLabels = data.events;
     this.chartData   = data.tickets
   })
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    canvas.reset();
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
