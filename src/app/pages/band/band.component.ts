import {Component, HostListener, OnInit} from '@angular/core';
import { BandMember } from "../../models/models";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})

export class BandComponent implements OnInit{
  public membersHeadbanging: number = 0;
  audioPlaying: boolean = false;
  bandMembers: BandMember[] = [
    {
      id: 0,
      name: "Mark Hendriks",
      instrument: 'Guitar',
      bio: 'Good enough? No. We can do better. Mark makes sure sloppy riffs don\'t make it on the record. If you hear high notes in your ear it\'s probably Mark',
      imgPath: '/assets/img/band-members/mark/',
    },
    {
      id: 1,
      name: "Kiko",
      instrument: 'Bass',
      bio: 'Ever heard of Merciless? No? We didn\'t either. Kiko is inspired by literally every band and brings his own sauce to the Headless Hunter songs',
      imgPath: '/assets/img/band-members/kiko/',
    },
    {
      id: 2,
      name: "Lucas van der Heijden",
      instrument: 'Singer',
      bio: "Sounds the scariest, is the sweetest. It's not just singing he does, he also has been a major part in the songwriting of every single Headless Hunter song!",
      imgPath: '/assets/img/band-members/lucas/',
    },
    {
      id: 3,
      name: "Brian Stone Mountains",
      instrument: 'Guitar',
      bio: 'Brian can play as tight as a ring you thought you would fit and now wouldn\'t come off so now your mom is fetching butter.',
      imgPath: '/assets/img/band-members/brian/',
    },
    {
      id: 4,
      name: "Bram ter Haar",
      instrument: 'Drums',
      bio: 'We don\'t have to ask Bram if he can play a little faster live, because when he starts playing, even Max Verstappen can\'t keep up...',
      imgPath: '/assets/img/band-members/bram/',
    },
  ];
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  public addHeadbanger(){
    this.membersHeadbanging++;
    if(this.membersHeadbanging === 5 && !this.audioPlaying){
      this.audioPlaying = true;
      this.playAudio()
    }
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "/assets/sound/Liberate_your_will.wav";
    audio.load();
    audio.volume = 0.3;
    audio.play();
  }
}
