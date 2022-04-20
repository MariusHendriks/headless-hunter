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
      event: 'Battle 4 BOA',
      venue: 'Baroeg',
      place: 'Rotterdam',
      country: 'Netherlands',
      date: '30-04-2022',
      linkToTickets: 'https://baroeg.stager.nl/web/tickets/111166741',
      free: false
    },
    {
      event: 'Nephylim +DÆMORTHAN + Headless Hunter',
      venue: 'Willem 2',
      place: "s' Hertogenbosch",
      country: 'Netherlands',
      date: '06-05-2022',
      linkToTickets: 'https://www.willem-twee.nl/alle-activiteiten/nephylim-dmorthan-headless-hunter-6-mei',
      free: false
    },
    {
      event: 'Welschap DxIxY Fest',
      venue: 'DIY',
      place: 'Eindhoven',
      country: 'Netherlands',
      date: '07-05-2022',
      linkToTickets: 'https://www.facebook.com/events/658978278517772/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A397343618881768%7D%7D]%22%7D',
      free: false
    },
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
