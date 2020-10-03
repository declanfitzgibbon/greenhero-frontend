import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import {MatButtonToggleModule} from '@angular/material/button-toggle';


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
import { AdminBarChartComponent } from './admin-bar-chart/admin-bar-chart.component';
import { UserConsumptionComponent } from './user-consumption/user-consumption.component';
import { UserMissionsComponent } from './user-missions/user-missions.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConsumptionCardsComponent } from './user-consumption-cards/user-consumption-cards.component';
import { UserConsumptionTimeSelectorComponent } from './user-consumption-time-selector/user-consumption-time-selector.component';
import { UserConsumptionDoughnutComponent } from './user-consumption-doughnut/user-consumption-doughnut.component';
import { UserConsumptionBarsComponent } from './user-consumption-bars/user-consumption-bars.component';



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
    AdminLineGraphComponent,
    AdminBarChartComponent,
    UserConsumptionComponent,
    UserMissionsComponent,
    UserStatsComponent,
    DashboardComponent,
    UserConsumptionCardsComponent,
    UserConsumptionTimeSelectorComponent,
    UserConsumptionDoughnutComponent,
    UserConsumptionBarsComponent
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
