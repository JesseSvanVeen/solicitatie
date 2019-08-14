import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { DatapageComponent } from './datapage/datapage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule } from 'angular-bootstrap-md';
import { AveragesComponent } from './averages/averages.component';
import { LinegraphComponent } from './linegraph/linegraph.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DatapageComponent,
    NavbarComponent,
    FooterComponent,
    AveragesComponent,
    LinegraphComponent,
    ScatterplotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
