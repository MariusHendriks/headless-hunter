import { Component, OnInit } from '@angular/core';
import { RawImage } from 'src/app/models/models';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  imgUrls: string[] = [];
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe((res: any) => {
      res.results.map((rawImage: RawImage) => {
        this.imgUrls.push(rawImage.properties.url.url);
      });
    });
  }
}
