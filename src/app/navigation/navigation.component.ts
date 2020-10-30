import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from '../theme.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isDark: boolean = false;
  isUser: boolean = false;
  coinAmount: number = 200;

  constructor(private themeService: ThemeService, private userService: UserService) { }

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
    this.userService.getUserType().subscribe((user) => this.isUser = user);
    this.isUser = this.userService.getCurrentUserType();
    this.coinAmount = this.userService.getCurrentCoinAmount();
    this.userService.getCoinsEmitter().subscribe((amount) => this.coinAmount = amount);
  }

  changeTheme(event) {
    this.themeService.changeTheme();
  }
  
  changeUser(event) {
    this.userService.changeUser();
  }

}
