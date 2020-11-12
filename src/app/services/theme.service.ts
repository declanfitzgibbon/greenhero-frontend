import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark: boolean;
  private isDark$: EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    this.isDark = true;
  }

  changeTheme() {
    
    this.isDark = !this.isDark;
    this.isDark$.emit(this.isDark);
  }

  getThemeType() {
    return this.isDark$;
  }
  
  getCurrentThemeType() {
    return this.isDark;
  }
}
