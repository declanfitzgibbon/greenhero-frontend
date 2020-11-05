import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ScheduleModule, AgendaService, DayService, 
  WeekService, WorkWeekService, MonthService } 
from '@syncfusion/ej2-angular-schedule';



import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavigationComponent } from './navigation/navigation.component';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';
import { EventListComponent } from './event-list/event-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminCardsComponent } from './admin-cards/admin-cards.component';
import { AdminAlertFeedComponent } from './admin-alert-feed/admin-alert-feed.component';
import { AppComponent } from './app.component';
import { AdminDoughnutComponent } from './admin-doughnut/admin-doughnut.component';
import { AdminLineGraphComponent } from './admin-line-graph/admin-line-graph.component';
import { AdminBarsComponent } from './admin-bars/admin-bars.component';
import { AdminBarChartComponent } from './admin-bar-chart/admin-bar-chart.component';
import { AdminPieChartComponent } from './admin-pie-chart/admin-pie-chart.component';
import { AdminProgressBarComponent } from './admin-progress-bar/admin-progress-bar.component';
import { AdminPowerDashboardComponent } from './admin-power-dashboard/admin-power-dashboard.component';
import { AdminEngageDashboardComponent } from './admin-engage-dashboard/admin-engage-dashboard.component';
import { AdminTimeSelectorComponent } from './admin-time-selector/admin-time-selector.component';
import { UserConsumptionComponent } from './user-consumption/user-consumption.component';
import { UserMissionsComponent } from './user-missions/user-missions.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserProgressBarComponent } from './user-progress-bar/user-progress-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConsumptionCardsComponent } from './user-consumption-cards/user-consumption-cards.component';
import { UserConsumptionTimeSelectorComponent } from './user-consumption-time-selector/user-consumption-time-selector.component';
import { UserConsumptionDoughnutComponent } from './user-consumption-doughnut/user-consumption-doughnut.component';
import { UserConsumptionBarsComponent } from './user-consumption-bars/user-consumption-bars.component';
import { UserGaugeChartComponent } from './user-consumption-gauge/user-consumption-gauge.component';
import { RoomReserverComponent } from './room-reserver/room-reserver.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomCalendarComponent } from './room-calendar/room-calendar.component';
import { UserService } from './user.service';
import { ThemeService } from './theme.service';
import { EventService } from './event.service';
import { UserBattleComponent } from './user-battle/user-battle.component';
import { UserBattleActionsComponent } from './user-battle-actions/user-battle-actions.component';
import { UserBattleCanvasComponent } from './user-battle-canvas/user-battle-canvas.component';
import { UserBattleTurnsComponent } from './user-battle-turns/user-battle-turns.component';
import { SkillTreeComponent } from './skill-tree/skill-tree.component';
import { SkillTreeDashboardComponent } from './skill-tree-dashboard/skill-tree-dashboard.component';
import { SkillTreeActionsComponent } from './skill-tree-actions/skill-tree-actions.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationCardsComponent,
    EventListComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminCardsComponent,
    AdminAlertFeedComponent,
    AdminDoughnutComponent,
    AdminPieChartComponent,
    AdminLineGraphComponent,
    AdminBarsComponent,
    AdminBarChartComponent,
    AdminProgressBarComponent,
    AdminTimeSelectorComponent,
    AdminPowerDashboardComponent,
    AdminEngageDashboardComponent,
    UserConsumptionComponent,
    UserMissionsComponent,
    UserStatsComponent,
    DashboardComponent,
    UserProgressBarComponent,
    UserGaugeChartComponent,
    UserConsumptionCardsComponent,
    UserConsumptionTimeSelectorComponent,
    UserConsumptionDoughnutComponent,
    UserConsumptionBarsComponent,
    RoomReserverComponent,
    RoomListComponent,
    RoomCalendarComponent,
    UserBattleComponent,
    UserBattleActionsComponent,
    UserBattleCanvasComponent,
    UserBattleTurnsComponent,
    SkillTreeComponent,
    SkillTreeDashboardComponent,
    SkillTreeActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatRippleModule,
    MatGridListModule,
    FlexLayoutModule,
    NgxChartsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ScheduleModule
  ],
  providers: [
    UserService,
    ThemeService,
    EventService,
    AgendaService, 
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
