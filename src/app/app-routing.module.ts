import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunningComponent } from './running/running.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { HikingComponent } from './hiking/hiking.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path: 'running',
    component: RunningComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: SplashPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'hiking',
    component: HikingComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
