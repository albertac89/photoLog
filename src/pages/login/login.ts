import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { User } from '../../models/user.model'
import { UserService } from '../../services/user/user.service'
import { LoadingController } from 'ionic-angular';
import {Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{
  public loading;
  private loginForm: FormGroup;

  constructor(public menuCtrl: MenuController,
              public navCtrl: NavController,
              public userServices: UserService,
              public user: User,
              public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);
    this.loginForm = new FormGroup({
      'user': new FormGroup({
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      })
    });
  }

  public doLogin() {
    console.log(this.loginForm.get('user.username').value);
    this.presentLoading();
    setTimeout(() => {
      this.userServices.setUser(this.loginForm.value.user);
      this.navCtrl.setRoot(HomePage);
      this.menuCtrl.enable(true);
      this.loading.dismiss();
    }, 2000);
  }

  public presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loading.present();
  }
}
