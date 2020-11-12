import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Body } from 'matter';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUser: boolean;
  private coinAmount: number;
  private isUser$: EventEmitter<boolean> = new EventEmitter();
  private coinAmount$: EventEmitter<number> = new EventEmitter();
  user: {_id: string};
  currentUserId = '5fa177809af0e02777994f80';
  constructor(private http: HttpClient) { 
    this.isUser = true;
    // CALL FROM DB
    (this.http.get<any>('https://greenhero.herokuapp.com/User/getCoinAmountByUserId?user_id='+this.currentUserId).toPromise()).then((userObtained) => {
      this.coinAmount = userObtained[0].abilityPoints;
      this.user = userObtained[0];
      this.coinAmount$.emit(this.coinAmount);
    });
    
  }
  

  // DONT TOUCH
  changeUser() {
    this.isUser = !this.isUser;
    this.isUser$.emit(this.isUser);
  }

  async addCoins(coins: number) {

    await this.http.put<any>('https://greenhero.herokuapp.com/User/addCoinsByUserId?_id='+this.currentUserId+'&addCoins='+coins+'&oldCoins='+this.coinAmount,null).toPromise();
    this.coinAmount += coins;
    this.coinAmount$.emit(this.coinAmount);
  }
  
  async substractCoins(coins: number) {

    await this.http.put<any>('https://greenhero.herokuapp.com/User/substractCoinsByUserId?_id='+this.currentUserId+'&substractCoins='+coins+'&oldCoins='+this.coinAmount,null).toPromise();
    this.coinAmount -= coins;
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
