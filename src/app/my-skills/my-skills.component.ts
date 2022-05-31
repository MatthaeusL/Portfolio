import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  
    SkillParts=[
      {logo: 'assets/img/html.png',
       skillName: 'HTML / CSS'},
      {logo: 'assets/img/javascript.png',
       skillName: 'Java script'},
      {logo: 'assets/img/angular.png',
       skillName: 'Angular'},
      {logo: 'assets/img/scrum.png',
       skillName: 'SCRUM'},
      {logo: 'assets/img/git.png',
       skillName: 'Git'},
      {logo: 'assets/img/pencil.png',
       skillName: 'Design Thinking'},
      {logo: 'assets/img/api.png',
       skillName: 'Rest API'},
      {logo: 'assets/img/test.png',
       skillName: 'Test automation'},
      {logo: 'assets/img/database.png',
       skillName: 'Databases'},
           
  
    ];


    constructor(){
     
    }

    ngOnInit(){
    
      
      
    };


}
