import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { Node, Ability, AugmentationType, NodeType } from '../models/node';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Array<Team> = [];

  constructor(private http: HttpClient) { }

  async getPlayerTeamForEvent(event_id: string, user_id: string) {
    //return this.teams.find((team) => team.event_id === event_id && (team.teamLeader.user_id === user_id || team.teamMembers.some((member) => member.user_id === user_id)));
    const team = await this.http.get<Team>("http://localhost:8080/Team/getTeamByEventIdAndUserId?event_id="+encodeURIComponent(event_id)+
                                                   "&user_id="+encodeURIComponent(user_id)).toPromise();
    return team;
  }


  async addTeam(team: Team) {
    team.teamLeader = (team.teamLeader._id as any);
    for (var i=0;i<team.teamMembers.length;i++) {
      team.teamMembers[i] = (team.teamMembers[i] as any);
    }
    //this.teams.push(team);
    return await this.http.post('http://localhost:8080/Team/', {...team}).toPromise();
  }

  async saveTeam(team_id: string, team: Team) {
    //this.teams[this.teams.findIndex((team) => team._id === team_id)] = team;
    team.teamLeader = (team.teamLeader._id as any);
    if(team.teamMembers){
      for (var i=0;i<team.teamMembers.length;i++) {
        team.teamMembers[i] = (team.teamMembers[i]._id as any);
      }
    }
    if(team.applications) {
      for (var i=0;i<team.applications.length;i++) {
        team.applications[i] = (team.applications[i]._id as any);
      }
    }
   return await this.http.put('http://localhost:8080/Team/modifyTeamById?_id='+encodeURIComponent(team_id),{...team}).toPromise();
  }

  searchTeams(event_id: string, name?: string) {
    //return this.teams.filter((team) => name ? ( team.event_id === event_id && team.name.toLowerCase().includes(name.toLowerCase())) : (team.event_id === event_id) )
    let url = 'http://localhost:8080/Team/getTeamByEventIdAndTeamName?event_id='+encodeURIComponent(event_id);
    if(name) {
      url += '&teamName='+encodeURIComponent(name)
    }
    return this.http.get<Array<Team>>(url).toPromise();
  }

  async createApplication(application: Application) {
    return await this.http.post('http://localhost:8080/Application/', {...application, character: application.character._id}).toPromise();
  }
  
  async updateApplication(application: Application) {
    return await this.http.put('http://localhost:8080/Application/', {...application, character: application.character._id}).toPromise();
  }

}
