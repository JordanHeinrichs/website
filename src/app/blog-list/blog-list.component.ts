import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent {

  @Input() public blogs: Blog[] = [];

  constructor() { }
}
