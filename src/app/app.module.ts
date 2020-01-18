import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DayItemComponent } from './day-item/day-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchModelComponent } from './search-model/search-model.component';
import { DayInfoComponent } from './day-info/day-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DayItemComponent,
    SearchModelComponent,
    DayInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
