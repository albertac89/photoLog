import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';


@Injectable()
export class UserService {

  private user: User;

  constructor() { }

  public setUser(user): void {
    this.user = user;
  }

  public getUser(): User {
    return this.user;
  }

}

