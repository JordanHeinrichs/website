import { Component, OnInit } from '@angular/core';
import { MenuLink } from '../sidenav/sidenav.component';
import { projects } from './project-directory';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public linkList: MenuLink[] = [];
  constructor() { }

  ngOnInit() {
    this.linkList = projects.map(project => ({title: project.title, url: project.url}));
  }
}
