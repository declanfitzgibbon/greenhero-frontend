import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDark: boolean;
  loading: boolean = true;

  constructor(private themeService: ThemeService, private userService: UserService) {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
    this.userService.getCoinsEmitter().subscribe((coins) => this.loading = false);
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

}
