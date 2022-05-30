import { Component, OnInit } from '@angular/core';
import { Show } from "../../models/models";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [
    {
      event: 'Changing Tides + Headless Hunter',
      venue: 'Cafe Govers',
      place: 'Geffen',
      country: 'Netherlands',
      date: '01-10-2022',
      linkToTickets: 'https://www.facebook.com/events/248227777237431',
      free: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
