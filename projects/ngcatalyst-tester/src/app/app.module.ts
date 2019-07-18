import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { SunburstComponent, PunchCardComponent, PieChartComponent, LinePlotComponent, HeatMapComponent, BubbleChartComponent, BarChartComponent } from 'ngcatalyst';
// import {NgcatalystModule} from 'ngcatalyst';
// import {LinePlotComponent} from '../../../../projects/ngcatalyst/src/lib/line-plot.component';
// import {PieChartComponent} from '../../../../projects/ngcatalyst/src/lib/pie-chart.component';
import {SunburstComponent} from '../../../../projects/ngcatalyst/src/lib/sunburst.component';

@NgModule({
  declarations: [
    AppComponent,
    SunburstComponent
    // LinePlotComponent,
    // PieChartComponent
  ],
  imports: [
    BrowserModule,
    // NgcatalystModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
