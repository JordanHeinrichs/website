import { Component } from '@angular/core';
import { projects } from '../project-directory';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.sass']
})
export class ProjectsOverviewComponent {

  constructor() { }

  public projects = projects;
}
