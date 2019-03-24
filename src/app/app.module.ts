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
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MyWebsiteComponent } from './projects/project-pages/my-website/my-website.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { BlogListComponent } from './blog-list/blog-list.component';

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
    FooterComponent,
    MyWebsiteComponent,
    ProjectsOverviewComponent,
    BlogListComponent,
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
