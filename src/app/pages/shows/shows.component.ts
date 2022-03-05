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
      event: 'Stukafest',
      venue: 'Random student apartment',
      place: 'Eindhoven',
      country: 'Netherlands',
      date: '23-03-2022',
      linkToTickets: 'https://www.stukafest.nl/eindhoven/',
    },
    {
      event: 'Metal Battle',
      venue: 'De Groote Weiver',
      place: 'Wormerveer',
      country: 'Netherlands',
      date: '02-04-2022',
      linkToTickets: 'https://www.facebook.com/events/643194806977448/?ref=newsfeed'
    },
    {
      event: 'Metal Battle',
      venue: 'Little Devil',
      place: 'Tilburg',
      country: 'Netherlands',
      date: '21-02-2022',
      linkToTickets: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
