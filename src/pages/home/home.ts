import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, ToastController, MenuController } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { DataService } from '../../services/data/data.service';

import { ViewPage } from '../view/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: User;
  public images: any;
  public base64Image: string;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              public params: NavParams,
              public userServices: UserService,
              public dataServices: DataService,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private geolocation: Geolocation,
              public menu: MenuController
  ) {
    this.menu.enable(true);
    this.user = this.userServices.getUser();
    this.images = this.dataServices.getImages();
  }

  takePicture() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.showPrompt();
      this.images = this.dataServices.getImages();
    }, (err) => {
      console.log(err);
    });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Save image',
      message: 'Add an image name',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.base64Image = '';
            let toast = this.toastCtrl.create({
              message: 'Image deleted',
              duration: 3000
            });
            toast.present();
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(data.name && data.name.length > 0) {
              this.geolocation.getCurrentPosition().then((resp) => {
                let image = {
                  src: this.base64Image,
                  name: data.name,
                  coords: resp.coords
                };
                this.dataServices.saveImage(image);
              }).catch((error) => {
                console.log('Error getting location', error);
              });
            } else {
              let toast = this.toastCtrl.create({
                message: 'Image not saved',
                duration: 3000
              });
              toast.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }

  viewImage(image) {
    this.navCtrl.push(ViewPage, {image: image});
  }
}
