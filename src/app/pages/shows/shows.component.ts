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
    currentShowsActive: boolean = true
    
    constructor(private showService: ShowsService) { }

    ngOnInit() {
        this.showService.getShows().subscribe((res: any) => {
            res.map((show: any) => {
                const { date } = show.properties.date;
                if (this.isToday(new Date(date.start))) {
                    show.properties.isToday = true
                }

                const futureShow: boolean = this.isPastShow(new Date(date.start));
                if (futureShow) {
                    this.shows.push(show.properties);
                } else {
                    this.pastShows.push(show.properties);
                }
            })
            this.shows.sort((a, b) => {
                return new Date(a.date.date.start).valueOf() - new Date(b.date.date.start).valueOf()
            })

            this.pastShows.sort((a, b) => {
                return new Date(b.date.date.start).valueOf() - new Date(a.date.date.start).valueOf()
            })
        });
    }

    isPastShow = (date: Date): boolean => {
        const today = new Date();
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth();
        const dateDay = date.getDate();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
        return dateYear > todayYear ||
            (dateYear === todayYear && dateMonth > todayMonth) ||
            (dateYear === todayYear && dateMonth === todayMonth && dateDay >= todayDay);
    }

    isToday = (date: Date) => {
        const today = new Date()
        return date.getDate() == today.getDate() &&
            date.getMonth() == today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
}
