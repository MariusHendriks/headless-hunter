import { Component } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

    currentYear:number = new Date().getFullYear();
  constructor() { }

  goToUrl(url: string): void {
    window.open(url, "_blank")
  }

}
