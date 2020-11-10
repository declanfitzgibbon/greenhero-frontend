import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleTurnService {

  turns = ['1', '3', '2', '4'];
  turnChange: EventEmitter<Array<string>> = new EventEmitter();

  constructor() { }

  nextTurn() {
    this.turns.push(this.turns.shift());
    this.turnChange.emit(this.turns);
  }
}
