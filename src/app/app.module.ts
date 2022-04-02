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
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/title/title.component';
import { MusicComponent } from './pages/music/music.component';

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
    SliderComponent,
    TitleComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
