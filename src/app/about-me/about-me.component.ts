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
      AMtext: 'My journey into the world of technology started at the young age of 16 dealing with MS Frontpage. Later as a student, I worked for the international geothermal centre, I gained knowledge by educating myself in LabVIEW. As a founder of a medical transport company, my daily business was to organize the administration and handle documentation. For more efficiency in our daily operations, I worked with Microsoft Office automation.',
    },
    {
      AMicon: 'assets/img/heart-line.png',
      AMtitle: 'I was always fascinated',
      AMtext: 'by technology. The process of creating a code from the very beginning to a final direct solution always inspired me and accompanies me along the path of my career. So it was just a matter of time before I would turn my passion into a profession.',
    },
    {
      AMicon: 'assets/img/search-line.png',
      AMtitle: 'Here I found what I was looking for',
      AMtext: 'To make progress and gain a lot of practical experience in software development I got professional training as a front-end developer at the Developer Academy. With their systematic training, I am now able to build websites and apps in teams and also alone and got professional code reviews.',
    },
    {
      AMicon: 'assets/img/flight-takeoff-line.png',
      AMtitle: 'My new journey begins ',
      AMtext: 'as a frontend developer, I would apply my experience and look for a new challenge.',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
