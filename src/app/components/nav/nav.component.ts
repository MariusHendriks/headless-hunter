import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeClass: string = "home";
  menuItems: string[] = ['home', 'band', ' ', 'shows', 'music'];
  constructor() { }

  ngOnInit(): void {
  }

  setActiveClass(menuItem: string){
    this.activeClass = menuItem;
  }
}
