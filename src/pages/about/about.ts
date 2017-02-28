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
  chartLabels:string[] = []
  chartData:number[] = [];
  chartType:string = 'doughnut';

  constructor(public navCtrl: NavController, private authService: Auth) {

  }
 ngOnInit(){
   this.authService.getStats().subscribe(data =>{
     console.log(data)
     // Need to split this in it own service someday.
     let graph    = data.events
     let tickets  = data.tickets
     console.log(graph)
     console.log(tickets)

     graph.forEach((x)=>{
       this.chartLabels.push(x.name)
       this.chartData.push(tickets.filter((y)=> y.event_id == x.id).length)
     })

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
