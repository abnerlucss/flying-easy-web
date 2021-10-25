import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from './home/home.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { FlightComponent } from './flights/flight.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardingComponent } from './boarding/boarding.component';
import { PassengersComponent } from './passengers/passengers.component';
import { AgGridModule } from 'ag-grid-angular';
import { FlightSaveComponent } from './flight-save/flight-save.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [					
    AppComponent,
    HomeComponent,
      FlightComponent,
      BoardingComponent,
      PassengersComponent,
      FlightSaveComponent,
      LoginComponent,
   ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
