import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.setTimeout("location.href='#/#main';", 3000);
  }

}
