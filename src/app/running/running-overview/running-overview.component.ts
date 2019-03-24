import { Component } from '@angular/core';
import { RUNNING } from '../running-directory';

@Component({
  selector: 'app-running-overview',
  templateUrl: './running-overview.component.html',
  styleUrls: ['./running-overview.component.sass']
})
export class RunningOverviewComponent {

  constructor() { }

  public raceReports = RUNNING;
}
