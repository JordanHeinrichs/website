import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { getChildrenRoutes } from './blog-list/blog';
import { HIKING } from './hiking/hiking-directory';
import { HikingComponent } from './hiking/hiking.component';
import { HikingOverviewComponent } from './hiking/hiking-overview/hiking-overview.component';
import { PROJECTS } from './projects/project-directory';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { RUNNING } from './running/running-directory';
import { RunningComponent } from './running/running.component';
import { RunningOverviewComponent } from './running/running-overview/running-overview.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SplashPageComponent,
  },
  {
    path: 'running',
    component: RunningComponent,
    children: getChildrenRoutes(RUNNING, RunningOverviewComponent),
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: getChildrenRoutes(PROJECTS, ProjectsOverviewComponent),
  },
  {
    path: 'hiking',
    component: HikingComponent,
    children: getChildrenRoutes(HIKING, HikingOverviewComponent),
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
