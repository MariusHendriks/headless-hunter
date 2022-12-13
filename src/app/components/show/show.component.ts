import {Component, Input, OnInit} from '@angular/core';
import { Show } from "../../models/models";
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit{
  @Input() show?: Show;
  clientWidth: number = document.body.clientWidth;
  linkUnavailable: boolean = false;

  goToUrl(url: string): void {
    !this.linkUnavailable ? window.open(url, "_blank") : null
  }

  ngOnInit(): void {
    if(this.show){
      this.linkUnavailable = this.show.link_to_event.url === '';
    }
  }
}
