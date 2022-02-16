import { Component, OnInit } from '@angular/core';
import {BandMember} from "../../models/models";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  bandMembers: BandMember[] = [
    { name: "Mark Hendriks", instrument: 'Guitar', bio: 'Sweep and a swoop and thrashes a lot. Writes songs with his brother Lucas from their heijden.', imgPath: '/assets/img/band-members/mark/' },
    { name: "Kiko", instrument: 'Bass', bio: 'Er zit een kiko in de kliko', imgPath: '/assets/img/band-members/kiko/' },
    { name: "Lucas van der Heijden", instrument: 'Singer', bio: "Huts, en hee", imgPath: '/assets/img/band-members/lucas/' },
    { name: "Brian Stone Mountains", instrument: 'Guitar', bio: 'Brian can play as tight as a ring you thought you would fit and now wouldn\'t come off so now your mom is fetching butter.',imgPath: '/assets/img/band-members/brian/' },
    { name: "Bram ter Haar", instrument: 'Drums', bio: 'The kind of guy who doesn\'t stop playing while people are having a conversation. Also very hospital and always late.', imgPath: '/assets/img/band-members/bram/' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
