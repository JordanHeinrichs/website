import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { HikingComponent } from './hiking/hiking.component';
import { RunningComponent } from './running/running.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProjectsComponent,
    HikingComponent,
    RunningComponent,
    ContactMeComponent,
    SplashPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
