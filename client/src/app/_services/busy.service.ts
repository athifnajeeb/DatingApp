import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequsetCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy(){
    this.busyRequsetCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(225, 225, 225, 0)',
      color: '#87c4a3'
    })
  }

  idle(){
    this.busyRequsetCount--;
    if(this.busyRequsetCount <= 0){
      this.busyRequsetCount = 0;
      this.spinnerService.hide();
    }
  }
}
