import { Component, OnInit } from '@angular/core';
import { MenuLink } from '../sidenav/sidenav.component';
import { PROJECTS } from './project-directory';
import { getMenuList } from '../blog-list/blog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public linkList: MenuLink[] = [];
  constructor() { }

  public ngOnInit() {
    this.linkList = getMenuList(PROJECTS);
  }
}
