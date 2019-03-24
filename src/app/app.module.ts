import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { HikingComponent } from './hiking/hiking.component';
import { RunningComponent } from './running/running.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MyWebsiteComponent } from './projects/project-pages/my-website/my-website.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RunningOverviewComponent } from './running/running-overview/running-overview.component';
import { CalgaryMarathonComponent } from './running/running-pages/calgary-marathon/calgary-marathon.component';
import { BostonMarathonComponent } from './running/running-pages/boston-marathon/boston-marathon.component';
import { GoldenUltraComponent } from './running/running-pages/golden-ultra/golden-ultra.component';
import { HikingOverviewComponent } from './hiking/hiking-overview/hiking-overview.component';
import { RockwallComponent } from './hiking/hiking-pages/rockwall/rockwall.component';
import { ColumbiaIcefield2018Component } from './hiking/hiking-pages/columbia-icefield2018/columbia-icefield2018.component';
import { PeytoHutComponent } from './hiking/hiking-pages/peyto-hut/peyto-hut.component';
import { SolarCarComponent } from './projects/project-pages/solar-car/solar-car.component';
import { OvalToGpsStravaComponent } from './projects/project-pages/oval-to-gps-strava/oval-to-gps-strava.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProjectsComponent,
    HikingComponent,
    RunningComponent,
    SplashPageComponent,
    NavbarComponent,
    FooterComponent,
    MyWebsiteComponent,
    ProjectsOverviewComponent,
    BlogListComponent,
    RunningOverviewComponent,
    CalgaryMarathonComponent,
    BostonMarathonComponent,
    GoldenUltraComponent,
    HikingOverviewComponent,
    RockwallComponent,
    ColumbiaIcefield2018Component,
    PeytoHutComponent,
    SolarCarComponent,
    OvalToGpsStravaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
