import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  private coinAmount: number;
  private isUser$: EventEmitter<boolean> = new EventEmitter();
  private coinAmount$: EventEmitter<number> = new EventEmitter();
  user: {_id: string};
  constructor() { 
    this.isUser = true;
    
    // CALL FROM DB
    this.coinAmount = 200;
    this.user = { _id: "1" };
  }

  // DONT TOUCH
  changeUser() {
    this.isUser = !this.isUser;
    this.isUser$.emit(this.isUser);
  }

  addCoins(coins: number) {
    this.coinAmount += coins;
    this.coinAmount$.emit(this.coinAmount);
  }
  
  substractCoins(coins: number) {
    this.coinAmount -= coins;
    this.coinAmount$.emit(this.coinAmount);
  }

  async getTopActive(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 'Reynaldo Quintero';
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 'Reynaldo Quintero';
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 'Reynaldo Quintero';
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 'Reynaldo Quintero';
        break;
    }
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
