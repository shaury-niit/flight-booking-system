import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import {BusinessBookingComponent } from './components/business-booking/business-booking.component'
import {NormalBookingComponent} from './components/normal-booking/normal-booking.component'
import {AnalyticsComponent} from './components/analytics/analytics.component'
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component'
import {MyBookingsComponent} from './components/my-bookings/my-bookings.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'flightsList', component: FlightsListComponent,
  children: [
    { path: '', redirectTo: 'normalBooking', pathMatch: 'full' },
    { path: 'normalBooking', component: NormalBookingComponent },
    { path: 'businessBooking', component: BusinessBookingComponent },
  ]
},
  {path: 'bookFlight', component: BookFlightComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'bookingConfirmation', component: BookingConfirmationComponent},
  {path: 'myBookings', component: MyBookingsComponent},
  {path: 'feedback', loadChildren: () => import('./feedback-module/feedback-module.module').then(m => m.FeedbackModuleModule)}​​​​​,
  {path: '**', redirectTo:'/login'},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
