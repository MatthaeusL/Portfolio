import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme-cards',
  templateUrl: './aboutme-cards.component.html',
  styleUrls: ['./aboutme-cards.component.scss']
})
export class AboutmeCardsComponent implements OnInit {
  @Input() aboutMeCard:any = [
    {
      AMicon: '',
      AMtitle: '',
      AMtext: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
