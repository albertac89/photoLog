import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { User } from '../../models/user.model'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public userServices: UserService, public user: User) {
  }

  public doLogin() {
    if(this.user.username && this.user.username.length > 0 && this.user.password && this.user.password.length > 0) {
      this.userServices.setUser(this.user);
      this.navCtrl.setRoot(HomePage);
    }
  }
}
