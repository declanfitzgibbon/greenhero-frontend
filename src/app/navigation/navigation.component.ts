import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() isDark: boolean = false;
  @Input() isUser: boolean = false;
  @Output() themeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() userChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(event) {
    this.themeChange.emit(!this.isDark);
  }
  
  changeUser(event) {
    this.userChange.emit(!this.isUser);
  }

}
