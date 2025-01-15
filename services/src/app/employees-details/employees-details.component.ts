import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent {
  employees:any;
  constructor(private common:CommonService){
    this.employees = common.employees;
  }

  ngOnInit():void{
    let difference = this.common.agecalculation(new Date(), new Date());
  }
}
