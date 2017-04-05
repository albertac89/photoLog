import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private images: any[];

  constructor() {
    // this.images = [
    //   {
    //     src: 'http://www.barcelona.ferraridealers.com/siteasset/ferraridealer/54f07ac8c35b6/961/420/selected/0/0/0/54f07ac8c35b6.jpg',
    //     name: 'Test image',
    //     coords: {
    //       latitude: 2165498,
    //       longitude: 65498765
    //     }
    //   }];
    this.images = [];
  }

  public saveImage(image: any): void {
      this.images.push(image);
  }

  public getImages(): any[] {
    return this.images;
  }

  public deleteImage(image): void {
    let index =  this.images.indexOf(image, 0);
    if (index > -1) {
      this.images.splice(index, 1);
    }
  }

}
