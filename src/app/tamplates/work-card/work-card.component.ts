import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  showInfo: boolean;
  @Input() card = {
    projID: 0,
    projName: '',
    projDescription: '',
    projPic: '',
    projLink: '',
    projGitLink: '',
    projCode: []
  };
  @Input() TST=[];
 

  constructor() {
    this.showInfo = false;
  }

  ngOnInit(): void {
  
  }

}
