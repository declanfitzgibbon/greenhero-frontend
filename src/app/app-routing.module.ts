import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomReserverComponent } from './room-reserver/room-reserver.component';
import { SkillTreeDashboardComponent } from './skill-tree-dashboard/skill-tree-dashboard.component';
import { UserBattleComponent } from './user-battle/user-battle.component';
import { UserConsumptionComponent } from './user-consumption/user-consumption.component';
import { UserMissionsComponent } from './user-missions/user-missions.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { AdminPowerDashboardComponent } from './admin-power-dashboard/admin-power-dashboard.component';
import { AdminEngageDashboardComponent } from './admin-engage-dashboard/admin-engage-dashboard.component';
import { UserEventFirstPageComponent } from './user-event-first-page/user-event-first-page.component';
import { UserCharacterComponent } from './user-character/user-character.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'missions',
        component: UserMissionsComponent
      },
      {
        path: 'stats',
        component: UserStatsComponent
      },
      {
        path: 'consumption',
        component: UserConsumptionComponent
      },
      {
        path: 'reservation',
        component: RoomReserverComponent
      },
      {
        path: 'event',
        component: UserEventFirstPageComponent
      },
      {
        path: 'battle',
        component: UserBattleComponent
      },
      {
        path: 'character',
        children: [
          {
            path: 'collections',
            component: UserCharacterComponent,
          },
          {
            path: 'skill-tree',
            component: SkillTreeDashboardComponent
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: 'power',
        component: AdminPowerDashboardComponent
      },
      {
        path: 'engage',
        component: AdminEngageDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
