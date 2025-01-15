import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  counter:any;
  constructor(private shared:SharedService){}
  ngOnInit(): void {
   this.shared.currentcountervalue.subscribe((result)=>{
    this.counter = result;
   })
  }

  decrement(){
    this.counter--;
    this.shared.updatecountervalue(this.counter);
  }
  
}
