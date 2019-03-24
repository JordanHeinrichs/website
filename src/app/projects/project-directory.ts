import { MyWebsiteComponent } from './project-pages/my-website/my-website.component';
import { Blog } from '../blog-list/blog';

export const PROJECTS: Blog[] = [
  {
    title: 'Personal website',
    image: 'assets/my-website.png',
    description: 'Angular webapp used as a playground for testing different ideas',
    url: 'my-website',
    component: MyWebsiteComponent,
  }
];
