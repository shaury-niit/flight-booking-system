import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { BookFlightComponent } from './book-flight/book-flight.component';

const routes: Routes = [];

@NgModule({
  imports: [
  RouterModule.forRoot([    
    {path: '', component: LoginComponent},
    {path: 'search', component: SearchComponent},
    {path: 'flightsList', component: FlightsListComponent},
    {path: 'bookFlight', component: BookFlightComponent}    
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
