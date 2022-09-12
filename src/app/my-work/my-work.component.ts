import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  buttons = [
    { name: 'All', set: true },
    { name: 'JavaScript', set: false },
    { name: 'Angular', set: false },


  ];
  // projectcode  => 0=all > 1=JavaScript > 2=Angular
  projects = [
    {
      projID: 0,
      projName: 'elpolloloco',
      projDescription: 'JavaScript besed jump amd run game',
      projPic: 'assets/img/proj/elpolloloco.png',
      projLink: 'https://matlis.info/elpolloloco/index.html',
      projGitLink: 'https://github.com/MatthaeusL/elpolloloco',
      projCode: [0, 1]
    },
    {
      projID: 1,
      projName: 'Join',
      projDescription: 'JavaScript besed Kanban board',
      projPic: 'assets/img/proj/join.png',
      projLink: 'https://matlis.info/join/index.html',
      projGitLink: 'https://github.com/MatthaeusL/Kanban-Gruppenarbeit--161',
      projCode: [0, 1]
    },
    {
      projID: 2,
      projName: 'ring of fire',
      projDescription: 'Angular based game',
      projPic: 'assets/img/proj/ROF.png',
      projLink: 'https://ring-of-fire-15e5c.web.app',
      projGitLink: 'https://github.com/MatthaeusL/RingOfFire',
      projCode: [0, 2]
    },
    {
      projID: 3,
      projName: 'Portfolio',
      projDescription: 'Angular besed portfolio with my skills an projects',
      projPic: 'assets/img/proj/portfolio.png',
      projLink: 'http://matlis.info',
      projGitLink: 'https://github.com/MatthaeusL/Portfolio',
      projCode: [0, 2]
    },
    // {
    //   projID: 4,
    //   projName: 'pokedex',
    //   projDescription: 'REST Api based Site',
    //   projPic: 'assets/img/proj/elpolloloco.png',
    //   projLink: 'http://demate.bplaced.net',
    //   projGitLink: 'http://google.de',
    //   projCode: [0, 1]
    // },

  ]
  j: number;
  tst = [];
  index: number;


  toggleButton(index) {
    this.tst = [];
    for (let cardindex = 0; cardindex < this.projects.length; cardindex++) {
      const cardi = cardindex;
      console.log(cardi);

      this.tst.push(this.projects[cardi].projCode.includes(index));
      console.log(this.tst, 'index', index);
    }


    switch (index) {
      case 0:
        this.buttons[0].set = true;
        this.buttons[1].set = false;
        this.buttons[2].set = false;
        break;
      case 1:
        this.buttons[0].set = false;
        this.buttons[1].set = true;
        this.buttons[2].set = false;

        break;
      case 2:
        this.buttons[0].set = false;
        this.buttons[1].set = false;
        this.buttons[2].set = true;

        break;
      default:
        break;
    }

  }

  constructor() { }

  ngOnInit(): void {
    for (let cardindex = 0; cardindex < this.projects.length; cardindex++) {
      this.tst.push(true)
    }
  }

}
