import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { LoginPage } from './login';
import { PlatformMock } from '../../../test-config/mocks-ionic';

import { MenuController, NavController } from 'ionic-angular';
import { User } from '../../models/user.model'
import { UserService } from '../../services/user/user.service'

describe('LoginPage Page', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        MenuController,
        NavController,
        User,
        UserService,
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof LoginPage).toBe(true);
  });

  it('should have the form inputs empty', () => {
    expect(component.loginForm.value.user.username).toEqual('');
    expect(component.loginForm.value.user.password).toEqual('');
  });
});
