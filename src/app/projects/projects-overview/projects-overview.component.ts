import { Component } from '@angular/core';
import { PROJECTS } from '../project-directory';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.sass']
})
export class ProjectsOverviewComponent {

  constructor() { }

  public projects = PROJECTS;
}
