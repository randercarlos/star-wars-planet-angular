import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarWarsPlanetComponent } from './star-wars-planet/star-wars-planet.component';
import { StarWarsPlanetService } from './star-wars-planet/star-wars-planet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsPlanetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StarWarsPlanetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
