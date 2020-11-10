import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application';
import { Team } from 'src/app/models/team';
import { Ability, NodeType, AugmentationType } from 'src/app/models/node';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { EventApplicationsDialogComponent } from '../event-applications-dialog/event-applications-dialog.component';

@Component({
  selector: 'app-event-team-lobby',
  templateUrl: './event-team-lobby.component.html',
  styleUrls: ['./event-team-lobby.component.css']
})
export class EventTeamLobbyComponent implements OnInit {

  @Input() team: Team;
  applications: Array<Application>;
  user;
  loading: boolean;

  constructor(private router: Router, public dialog: MatDialog, private teamService: TeamService, private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.user = this.userService.user;
    this.applications = this.team.applications;
    this.loading = false;
  }

  navigateToEvent() {
    this.router.navigate(['user', 'battle'], {
      queryParams: {
        eventId: this.team.event_id
      }
    });
  }

  abandonTeam() {
  }

  openApplications() {
    const dialogRef = this.dialog.open(EventApplicationsDialogComponent, {
      width: '90%',
      data: { applications: this.applications }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.applications = [];
        for(let app of result.applications) {
          if(app.accepted) {
            this.team.teamMembers.push(app.character);
          } else if (!app.rejected) {
            this.applications.push(app);
          }
        }
        this.teamService.saveTeam(this.team._id, this.team);
      } else {
        this.applications.forEach((app) => { app.accepted = false; app.rejected = false });
      }
    });
  }
  membersMissing() {
    return this.team.teamMembers.length !== 3;
  }

}
