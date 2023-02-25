import { Component, Input, OnInit } from '@angular/core';
import { Show } from "../../models/models";
@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
    @Input() show?: Show;
    @Input() isPastShow?: Boolean;
    clientWidth: number = document.body.clientWidth;
    hasShowLink: boolean = false;
    hasImageLink: boolean = false;

    getImageUrl(): string {
        if (this.isPastShow) {
            return this.show?.link_to_photos?.url
        } else {
            return this.show?.link_to_event.url || ""
        }
    }

    goToUrl(url: string): void {
        window.open(url, "_blank")
    }

    ngOnInit(): void {
        if (this.show) {
            this.hasShowLink = this.show.link_to_event.url !== null;
            this.hasImageLink = this.show.link_to_photos?.url !== null;
        }
    }
}
