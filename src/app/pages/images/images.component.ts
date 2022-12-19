import { Component, OnInit } from '@angular/core';
import { ImageAndOrder, RawImage } from 'src/app/models/models';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}
  imgColumns: Array<ImageAndOrder[]> = [];
  imgsColumn0: ImageAndOrder[] = [];
  imgsColumn1: ImageAndOrder[] = [];
  imgsColumn2: ImageAndOrder[] = [];
  imgsColumn3: ImageAndOrder[] = [];
  ngOnInit() {
    this.imagesService.getImages().subscribe((res: any) => {
      let count = 0;
      res.results.map((rawImage: RawImage) => {
        const rowNumber = rawImage.properties.row.select?.name;
        switch (rowNumber) {
          case 'Row 1':
            this.imgsColumn0.push({
              url: rawImage.properties.url.url,
              order: rawImage.properties.order.number,
            });
            break;
          case 'Row 2':
            this.imgsColumn1.push({
              url: rawImage.properties.url.url,
              order: rawImage.properties.order.number,
            });
            break;
          case 'Row 3':
            this.imgsColumn2.push({
              url: rawImage.properties.url.url,
              order: rawImage.properties.order.number,
            });
            break;
          case 'Row 4':
            this.imgsColumn3.push({
              url: rawImage.properties.url.url,
              order: rawImage.properties.order.number,
            });
            count = 0;
            break;
          default:
            break;
        }
        count++;
      });
      this.imgColumns.push(
        this.imgsColumn0,
        this.imgsColumn1,
        this.imgsColumn2,
        this.imgsColumn3
      );
    });
  }
}
