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
  }
  nextTurn(team_id: string) {
    this.turns.push(this.turns.shift());
    this.turnChange.emit(this.turns);
    this.http.put('http://localhost:8080/Team/updateTeamTurns', {
      turns: this.turns,
      team_id: team_id
    }).toPromise();
  }
}
