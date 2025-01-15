import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicecommunication';

  constructor(private shared:SharedService){}
  reset(){
    this.shared.updatecountervalue(0);
  } 
}
