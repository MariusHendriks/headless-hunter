import { Component, OnInit } from '@angular/core';
import { Show } from "../../models/models";
import { ShowsService } from './shows.service';

@Component({
    selector: 'app-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
    shows: Show[] = [];
    pastShows: Show[] = [];
    today: Date = new Date();
    constructor(private showService: ShowsService) { }

    ngOnInit() {
        this.today.setHours(23, 59, 59, 998);
        this.showService.getShows().subscribe((res: any) => {
            res.results.map((show: any) => {
                const { date } = show.properties;
                const pastShow: boolean = this.checkShowDate(date.date.start);
                if (pastShow) {
                    this.pastShows.push(show.properties);
                } else {
                    this.shows.push(show.properties);
                }
            })
            this.shows.sort((a, b) => {
                return new Date(a.date.date.start).valueOf() - new Date(b.date.date.start).valueOf()
            })
        });
    }

    checkShowDate = (date: Date): boolean => {
        return new Date(date) < this.today;
    };
}
