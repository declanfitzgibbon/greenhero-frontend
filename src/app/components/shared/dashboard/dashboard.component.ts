import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private themeService: ThemeService, private userService: UserService) { }

  isDark: boolean = true;
  isUser: boolean =  true;

  ngOnInit(): void {
    this.themeService.getThemeType().subscribe((theme) => this.isDark = theme);
    this.isDark = this.themeService.getCurrentThemeType();
    this.userService.getUserType().subscribe((user) => this.isUser = user);
    this.isUser = this.userService.getCurrentUserType();
  }

  

}
