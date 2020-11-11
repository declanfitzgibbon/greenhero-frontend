import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { SkillTreeDashboardComponent } from './components/user/skill-tree-dashboard/skill-tree-dashboard.component';
import { UserBattleComponent } from './components/user/user-battle/user-battle.component';
import { UserConsumptionComponent } from './components/user/user-consumption/user-consumption.component';
import { UserMissionsComponent } from './components/user/user-missions/user-missions.component';
import { AdminPowerDashboardComponent } from './components/admin/admin-power-dashboard/admin-power-dashboard.component';
import { AdminEngageDashboardComponent } from './components/admin/admin-engage-dashboard/admin-engage-dashboard.component';
import { UserEventFirstPageComponent } from './components/user/user-event-first-page/user-event-first-page.component';
import { UserCharacterComponent } from './components/user/user-character/user-character.component';

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
