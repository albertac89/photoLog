import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {
  public image: any;

  constructor(public params: NavParams,
              public navCtrl: NavController,
              public dataServices: DataService) {
    this.image = this.params.get('image');
  }

  deleteImage(image) {
    this.dataServices.deleteImage(image);
    this.navCtrl.pop();
  }
}
