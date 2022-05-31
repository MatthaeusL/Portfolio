import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-work-switch',
  templateUrl: './work-switch.component.html',
  styleUrls: ['./work-switch.component.scss']
})
export class WorkSwitchComponent implements OnInit {
  @Input() buttonName = { name:'', set: true };
  @Input() index = 0;

  @Output() buttonIndex = new EventEmitter<number>();

  toggleButton(){
    this.buttonIndex.emit(this.index);
    
  }
    



  constructor() { }

  ngOnInit(): void {
  }

}
