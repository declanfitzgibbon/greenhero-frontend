import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  private isUser$: EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    this.isUser = true;
  }

  changeUser() {
    this.isUser = !this.isUser;
    this.isUser$.emit(this.isUser);
  }

  getUserType() {
    return this.isUser$;
  }

  getCurrentUserType() {
    return this.isUser;
  }
}
