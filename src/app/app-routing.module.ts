import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunningComponent } from './running/running.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { HikingComponent } from './hiking/hiking.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { PROJECTS } from './projects/project-directory';
import { getChildrenRoutes } from './blog-list/blog';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SplashPageComponent,
  },
  {
    path: 'running',
    component: RunningComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: getChildrenRoutes(PROJECTS, ProjectsOverviewComponent),
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
