import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { User } from '../../models/user.model'
import { UserService } from '../../services/user/user.service'
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{
  public loading;

  constructor(public menuCtrl: MenuController,
              public navCtrl: NavController,
              public userServices: UserService,
              public user: User,
              public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);
    this.user.username = '';
    this.user.password = '';
  }

  public doLogin() {
    if(this.user.username && this.user.username.length > 0 && this.user.password && this.user.password.length > 0) {
      this.presentLoading();
      setTimeout(() => {
        this.userServices.setUser(this.user);
        this.navCtrl.setRoot(HomePage);
        this.menuCtrl.enable(true);
        this.loading.dismiss();
      },2000);
    }
  }

  public presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loading.present();
  }
}
