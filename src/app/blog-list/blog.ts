import { MenuLink } from '../sidenav/sidenav.component';

export interface Blog {
  title: string;
  image: string;
  description: string;
  url: string;
  component: any;
}

export function getMenuList(blogs: Blog[]): MenuLink[] {
  return blogs.map(function(blog) {
    return {
      title: blog.title,
      url: blog.url
    };
  });
}
