import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleTurnService {

  turns;
  turnChange: EventEmitter<Array<string>> = new EventEmitter();

  constructor(private http: HttpClient) { }

  setLocalTurns(turns: Array<string>) {
    this.turns = turns;
    this.turnChange.emit(this.turns);
  }
  nextTurn(team_id: string) {
    this.turns.push(this.turns.shift());
    this.turnChange.emit(this.turns);
  }
}
