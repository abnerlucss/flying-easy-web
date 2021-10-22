import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardingComponent } from './boarding/boarding.component';
import { FlightSaveComponent } from './flight-save/flight-save.component';
import { FlightComponent } from './flights/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassengersComponent } from './passengers/passengers.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'voos', component: FlightComponent },
  { path: 'embarques', component: BoardingComponent },
  { path: 'passageiros', component: PassengersComponent },
  { path: 'cadastrarvoo', component: FlightSaveComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
