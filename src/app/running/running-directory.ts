
import { Blog } from '../blog-list/blog';
import { BostonMarathonComponent } from './running-pages/boston-marathon/boston-marathon.component';
import { CalgaryMarathonComponent } from './running-pages/calgary-marathon/calgary-marathon.component';
import { GoldenUltraComponent } from './running-pages/golden-ultra/golden-ultra.component';

export const RUNNING: Blog[] = [
  {
    title: 'Boston Marathon',
    image: 'assets/my-website.png',
    description: 'Boston Marathon 2019 race report and training block.',
    url: 'boston-marathon',
    component: BostonMarathonComponent,
  },
  {
    title: 'Golden Ultra',
    image: 'assets/my-website.png',
    description: 'Golden Ultra 2019, my first ultra and trail race. Three days of fun.',
    url: 'golden-ultra',
    component: GoldenUltraComponent,
  },
  {
    title: 'Calgary Marathon',
    image: 'assets/my-website.png',
    description: 'Calgary Marathon 2018, first sub 3 marathon and Boston qualifier.',
    url: 'calgary-marathon',
    component: CalgaryMarathonComponent,
  }
];
