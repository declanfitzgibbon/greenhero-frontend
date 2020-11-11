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
import { MatDialogModule } from '@angular/material/dialog';

import { ScheduleModule, AgendaService, DayService, 
  WeekService, WorkWeekService, MonthService } 
from '@syncfusion/ej2-angular-schedule';



import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { NavigationCardsComponent } from './components/user/navigation-cards/navigation-cards.component';
import { EventListComponent } from './components/user/event-list/event-list.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminCardsComponent } from './components/admin/admin-cards/admin-cards.component';
import { AdminAlertFeedComponent } from './components/admin/admin-alert-feed/admin-alert-feed.component';
import { AdminTempFeedComponent } from './components/admin/admin-temp/admin-temp-feed.component';
import { AppComponent } from './app.component';
import { AdminDoughnutComponent } from './components/admin/admin-doughnut/admin-doughnut.component';
import { AdminLineGraphComponent } from './components/admin/admin-line-graph/admin-line-graph.component';
import { AdminBarsComponent } from './components/admin/admin-bars/admin-bars.component';
import { AdminBarChartComponent } from './components/admin/admin-bar-chart/admin-bar-chart.component';
import { AdminPieChartComponent } from './components/admin/admin-pie-chart/admin-pie-chart.component';
import { AdminProgressBarComponent } from './components/admin/admin-progress-bar/admin-progress-bar.component';
import { AdminPowerDashboardComponent } from './components/admin/admin-power-dashboard/admin-power-dashboard.component';
import { AdminEngageDashboardComponent } from './components/admin/admin-engage-dashboard/admin-engage-dashboard.component';
import { AdminTimeSelectorComponent } from './components/admin/admin-time-selector/admin-time-selector.component';
import { UserConsumptionComponent } from './components/user/user-consumption/user-consumption.component';
import { UserMissionsComponent } from './components/user/user-missions/user-missions.component';
import { UserProgressBarComponent } from './components/user/user-progress-bar/user-progress-bar.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { UserConsumptionCardsComponent } from './components/user/user-consumption-cards/user-consumption-cards.component';
import { UserConsumptionTimeSelectorComponent } from './components/user/user-consumption-time-selector/user-consumption-time-selector.component';
import { UserConsumptionDoughnutComponent } from './components/user/user-consumption-doughnut/user-consumption-doughnut.component';
import { UserConsumptionBarsComponent } from './components/user/user-consumption-bars/user-consumption-bars.component';
import { UserGaugeChartComponent } from './components/user/user-consumption-gauge/user-consumption-gauge.component';
import { RoomReserverComponent } from './components/user/room-reserver/room-reserver.component';
import { RoomListComponent } from './components/user/room-list/room-list.component';
import { RoomCalendarComponent } from './components/user/room-calendar/room-calendar.component';
import { UserBattleComponent } from './components/user/user-battle/user-battle.component';
import { UserBattleActionsComponent } from './components/user/user-battle-actions/user-battle-actions.component';
import { UserBattleCanvasComponent } from './components/user/user-battle-canvas/user-battle-canvas.component';
import { UserBattleTurnsComponent } from './components/user/user-battle-turns/user-battle-turns.component';
import { SkillTreeComponent } from './components/user/skill-tree/skill-tree.component';
import { SkillTreeDashboardComponent } from './components/user/skill-tree-dashboard/skill-tree-dashboard.component';
import { SkillTreeActionsComponent } from './components/user/skill-tree-actions/skill-tree-actions.component';
import { UserEventFirstPageComponent } from './components/user/user-event-first-page/user-event-first-page.component';
import { UserEventCreateTeamComponent } from './components/user/user-event-create-team/user-event-create-team.component';
import { EventTeamLobbyComponent } from './components/user/event-team-lobby/event-team-lobby.component';
import { EventApplicationsDialogComponent } from './components/user/event-applications-dialog/event-applications-dialog.component';
import { UserCharacterComponent } from './components/user/user-character/user-character.component';
import { EventSearchTeamComponent } from './components/user/event-search-team/event-search-team.component';

import { ThemeService } from './services/theme.service';
import { EventService } from './services/event.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationCardsComponent,
    EventListComponent,
    AdminDashboardComponent,
    AdminTempFeedComponent,
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
    SkillTreeActionsComponent,
    UserEventFirstPageComponent,
    UserEventCreateTeamComponent,
    EventTeamLobbyComponent,
    EventApplicationsDialogComponent,
    UserCharacterComponent,
    EventSearchTeamComponent
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
    ScheduleModule,
    MatDialogModule
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
