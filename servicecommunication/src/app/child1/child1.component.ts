import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit{
  counter:any;
constructor(private shared:SharedService){}
  ngOnInit(): void {
     this.shared.currentcountervalue.subscribe((result)=>{
      this.counter = result;
    })
  }
  increment(){
    this.counter++;
    this.shared.updatecountervalue(this.counter);
  }
  
}
