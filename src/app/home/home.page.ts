import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    
    public interest:string = "";
    public agelow: number = 21;
    public agehigh:number = 21;
    public maxdist:string = "0km";
  
    constructor(){

    }

    ngOnInit(){
      this.interest = "Both";
      //console.log(this.interest);
    }

    UpdateDistance(event:any){
      this.maxdist = event.detail.value+"km";
      if(event.detail.value>="100")
      this.maxdist+="+";
    }

    UpdateAge(event:any){
      //console.log(event.detail.value);
      this.agelow = event.detail.value.lower;
      this.agehigh = event.detail.value.upper;
    }

    UpdateInterest(event:any){
      //console.log(event.detail.value);
      this.interest = event.detail.value;
    }

}
