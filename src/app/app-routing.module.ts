import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PEYTO, ROCKWALL, COLUMBIA_ICEFIELD } from './hiking/hiking-directory';
import { HikingComponent } from './hiking/hiking.component';
import { HikingOverviewComponent } from './hiking/hiking-overview/hiking-overview.component';
import { WEBSITE, OVAL, SOLAR_CAR } from './projects/project-directory';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { BOSTON, GOLDEN_ULTRA, CALGARY_MARATHON } from './running/running-directory';
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
    children: [
      {
        path: BOSTON.url,
        component: BOSTON.component,
      },
      {
        path: GOLDEN_ULTRA.url,
        component: GOLDEN_ULTRA.component,
      },
      {
        path: CALGARY_MARATHON.url,
        component: CALGARY_MARATHON.component,
      },
      {
        path: '',
        component: RunningOverviewComponent,
      }
    ],
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: WEBSITE.url,
        component: WEBSITE.component,
      },
      {
        path: OVAL.url,
        component: OVAL.component,
      },
      {
        path: SOLAR_CAR.url,
        component: SOLAR_CAR.component,
      },
      {
        path: '',
        component: ProjectsOverviewComponent,
      }
    ],
  },
  {
    path: 'hiking',
    component: HikingComponent,
    children: [
      {
        path: PEYTO.url,
        component: PEYTO.component,
      },
      {
        path: ROCKWALL.url,
        component: ROCKWALL.component,
      },
      {
        path: COLUMBIA_ICEFIELD.url,
        component: COLUMBIA_ICEFIELD.component,
      },
      {
        path: '',
        component: HikingOverviewComponent,
      }
    ],
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
