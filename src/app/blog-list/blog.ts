import { MenuLink } from '../sidenav/sidenav.component';
import { Route } from '@angular/router';

export interface Blog {
  title: string;
  image: string;
  description: string;
  url: string;
  component: any;
}

export function getMenuList(blogs: Blog[]): MenuLink[] {
  return blogs.map(blog => ({title: blog.title, url: blog.url}));
}

export function getChildrenRoutes(blogs: Blog[], overviewComponent: any): Route[] {
  return blogs.map(blog => {
    return {
      path: blog.url,
      component: blog.component
    };
  }).concat({
    path: '',
    component: overviewComponent,
  });
}
