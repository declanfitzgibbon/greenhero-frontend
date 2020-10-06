import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomReserverComponent } from './room-reserver/room-reserver.component';
import { UserConsumptionComponent } from './user-consumption/user-consumption.component';
import { UserMissionsComponent } from './user-missions/user-missions.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'user',
    children: [
      {
        path:'missions',
        component: UserMissionsComponent
      },
      {
        path:'stats',
        component: UserStatsComponent
      },
      {
        path:'consumption',
        component: UserConsumptionComponent
      },
      {
        path:'reservation',
        component: RoomReserverComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
