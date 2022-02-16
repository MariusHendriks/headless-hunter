import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BandComponent } from './pages/band/band.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MouseTrackerDirective } from './directives/mouse-tracker.directive';
import { BandMemberComponent } from './components/band-member/band-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BandComponent,
    ShowsComponent,
    FooterComponent,
    MouseTrackerDirective,
    BandMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
