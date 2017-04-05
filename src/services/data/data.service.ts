import { Injectable } from '@angular/core';
import { Image } from '../../models/image.model';

@Injectable()
export class DataService {
  private images: Image[];

  constructor() {
    this.images = [];
  }

  public saveImage(image: Image): void {
      this.images.push(image);
  }

  public getImages(): Image[] {
    return this.images;
  }

  public deleteImage(image: Image): void {
    let index =  this.images.indexOf(image, 0);
    if (index > -1) {
      this.images.splice(index, 1);
    }
  }
}
