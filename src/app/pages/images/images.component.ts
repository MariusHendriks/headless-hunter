import { Component, OnInit } from '@angular/core';
import { ImageAndOrder, RawImage } from 'src/app/models/models';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  imgColumns: ImageAndOrder[][] = [[], [], [], []];
  loading = true;

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService
      .getImages()
      .then((res: any) => {
        const rowToColumnIndex: { [key: string]: number } = {
          'Row 1': 0,
          'Row 2': 1,
          'Row 3': 2,
          'Row 4': 3,
        };

        res.results.forEach((rawImage: RawImage) => {
          const rowNumber = rawImage.properties.row.select?.name;
          const columnIndex = rowToColumnIndex[rowNumber];
          if (columnIndex !== undefined) {
            this.imgColumns[columnIndex].push({
              url: rawImage.properties.url.url,
              order: rawImage.properties.order.number,
            });
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
