import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  link: string;
  menu: boolean = undefined;
  

  linkSkills(){ 
    this.menu = false;
    this.link ='#skills';
    return this.link;
  }
  linkAbout(){ 
    this.menu = false;
    this.link ='#about';
    return this.link;
  }
  linkPortfolio(){ 
    this.menu = false;
    this.link ='#portfolio';
    return this.link;
  }
  
  constructor() { }

  ngOnInit(): void {
   
    this.hiddeningNavbar();

  }

  hiddeningNavbar() {
    let prevScrollpos = window.pageYOffset;
    let nav = document.querySelector(".header");

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        nav.classList.remove("navHidden");
        
      } else {
        nav.classList.add("navHidden");
       
      }
      prevScrollpos = currentScrollPos;
    }
  }

}
