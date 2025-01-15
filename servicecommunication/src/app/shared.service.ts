import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  countervalue = new BehaviorSubject(0);
  currentcountervalue = this.countervalue.asObservable();
  

  updatecountervalue(count:any){
    this.countervalue.next(count);
  }
}
