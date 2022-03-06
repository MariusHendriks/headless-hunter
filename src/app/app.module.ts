import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BandComponent } from './pages/band/band.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BandMemberComponent } from './components/band-member/band-member.component';
import { ShowComponent } from './components/show/show.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BandComponent,
    ShowsComponent,
    FooterComponent,
    BandMemberComponent,
    ShowComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
