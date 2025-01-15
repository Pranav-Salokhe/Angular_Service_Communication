import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  employees = [
    {no:1 , name:"abc", age: 21},
    {no:2 , name:"xyz", age:22},
    {no:3 , name:"sddf", age:23},
    {no:4 , name:"rwd", age:24}
  ]
  constructor() { }

  agecalculation(todayDate:Date , birthDate:Date):number{
    let difference = 0;
    return difference;
  }
}
