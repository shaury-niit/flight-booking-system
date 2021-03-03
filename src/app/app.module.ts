import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NormalBookingComponent } from './components/normal-booking/normal-booking.component';
import { BusinessBookingComponent } from './components/business-booking/business-booking.component';
import { DiscountPipe } from './components/business-booking/discount.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    FlightsListComponent,
    BookFlightComponent,
    DashboardComponent,
    NormalBookingComponent,
    BusinessBookingComponent,
    DiscountPipe,
    NavbarComponent,
    AnalyticsComponent,
    BookingConfirmationComponent,
    MyBookingsComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
