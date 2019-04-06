import { MyWebsiteComponent } from './project-pages/my-website/my-website.component';
import { Blog } from '../blog-list/blog';
import { OvalToGpsStravaComponent } from './project-pages/oval-to-gps-strava/oval-to-gps-strava.component';
import { SolarCarComponent } from './project-pages/solar-car/solar-car.component';

export const PROJECTS: Blog[] = [
  {
    title: 'Personal website',
    image: 'assets/my-website.png',
    description: 'Angular webapp used as a playground for testing different ideas',
    url: 'my-website',
    component: MyWebsiteComponent,
  },
  {
    title: 'Indoor track to GPS tool',
    image: 'assets/oval-overview.png',
    description: 'A tool created for converting indoor training runs to a format for Strava',
    url: 'strava-gps-tool',
    component: OvalToGpsStravaComponent,
  },
  {
    title: 'Solar Car',
    image: 'assets/solar-car-overview-2.jpg',
    description: 'UofC Solar car team, 4th generation of the vehicle and competing in FSPG 2015',
    url: 'solar-car',
    component: SolarCarComponent,
  },
];
