import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './components/shared/dynamic-table/dynamic-table.component';
import { LoginComponent } from './components/core/login/login.component';
import { DashboardComponent } from './components/core/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { BarChartComponent } from './components/shared/bar-chart/bar-chart.component';
import { D3Service } from 'd3-ng2-service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { ExpansionPanelComponent } from './components/shared/expansion-panel/expansion-panel.component';
import { WidgetContainerComponent } from './components/shared/widget-container/widget-container.component';
import { PanelHeaderFilterComponent } from './components/shared/panel-header-filter/panel-header-filter.component';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { MaterialModule } from "./modules/material.module";
import { WidgetModule } from "./modules/widget.module";

import { HistoryPopupComponent } from './components/shared/history-popup/history-popup.component';

import { LocalStorageSchema } from './schemas/local-storage.schema';
import { TopMenuComponent } from './components/shared/top-menu/top-menu.component';
import { OrganisationDropDownComponent } from './components/shared/organisation-drop-down/organisation-drop-down.component';
import { ProjectDropDownComponent } from './components/shared/project-drop-down/project-drop-down.component';
import { GroupedBarChartComponent } from './components/shared/grouped-bar-chart/grouped-bar-chart.component';
import { DonutChartComponent } from './components/shared/donut-chart/donut-chart.component';
import { PropertyComponent } from './components/core/dashboard/property/property.component';
//import { PropertyDetailsComponent } from './components/core/dashboard/property/property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    BreadcrumbComponent,
    BarChartComponent,
    ExpansionPanelComponent,
    WidgetContainerComponent,
    PanelHeaderFilterComponent,
    HistoryPopupComponent,
    TopMenuComponent,
    GroupedBarChartComponent,
    DonutChartComponent,
    PropertyComponent
    //PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    WidgetModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
  ],
  providers: [D3Service, DashboardService,
    LocalStorageSchema],
  bootstrap: [AppComponent]
})
export class AppModule { }
