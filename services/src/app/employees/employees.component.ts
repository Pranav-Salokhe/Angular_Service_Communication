import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any;
  constructor(private common:CommonService){
    this.employees = common.employees;
  }

  ngOnInit():void{
    let difference = this.common.agecalculation(new Date(), new Date());
  }
}
