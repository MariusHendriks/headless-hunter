import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeClass: string = 'home';
  menuItems: string[] = ['home', 'images', ' ', 'shows', 'music'];
  constructor() {}

  setActiveClass(menuItem: string) {
    this.activeClass = menuItem;
  }

  scrollIntoView(elem: string) {
    // @ts-ignore
    document
      .querySelector('#' + elem)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
