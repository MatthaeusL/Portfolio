import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  aboutMeCards:any = [
    {
      AMicon: 'assets/img/walk-line.png',
      AMtitle: 'MY JURNEY BEGAN',
      AMtext: 'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects. as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects',
    },
    {
      AMicon: 'assets/img/heart-line.png',
      AMtitle: 'My love for IT was born',
      AMtext: 'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.',
    },
    {
      AMicon: 'assets/img/search-line.png',
      AMtitle: 'Here I found what I was looking for',
      AMtext: 'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.',
    },
    {
      AMicon: 'assets/img/flight-takeoff-line.png',
      AMtitle: 'Now my journey starts',
      AMtext: 'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
