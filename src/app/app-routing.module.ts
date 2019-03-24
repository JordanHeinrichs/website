import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunningComponent } from './running/running.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { HikingComponent } from './hiking/hiking.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { projects } from './projects/project-directory';


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
    children: projects.map(project => {
      return {
        path: project.url,
        component: project.component
      };
    }).concat({
      path: '',
      component: ProjectsOverviewComponent,
    }),
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
