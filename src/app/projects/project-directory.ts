import { MyWebsiteComponent } from './project-pages/my-website/my-website.component';

export interface Project {
  title: string;
  image: string;
  description: string;
  url: string;
  component: any;
}

export const projects: Project[] = [
  {
    title: 'Personal website',
    image: 'assets/my-website.png',
    description: 'Angular webapp used as a playground for testing different ideas',
    url: 'my-website',
    component: MyWebsiteComponent,
  }
];
