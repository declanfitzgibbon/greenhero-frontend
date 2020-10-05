import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  private coinAmount: number;
  private isUser$: EventEmitter<boolean> = new EventEmitter();
  private coinAmount$: EventEmitter<number> = new EventEmitter();

  constructor() { 
    this.isUser = true;
    this.coinAmount = 2000;
  }

  changeUser() {
    this.isUser = !this.isUser;
    this.isUser$.emit(this.isUser);
  }

  addCoins(coins: number) {
    this.coinAmount += coins;
    this.coinAmount$.emit(this.coinAmount);
  }

  getUserType() {
    return this.isUser$;
  }
  
  getCoinsEmitter() {
    return this.coinAmount$;
  }

  getCurrentUserType() {
    return this.isUser;
  }
  
  getCurrentCoinAmount() {
    return this.coinAmount;
  }
}
