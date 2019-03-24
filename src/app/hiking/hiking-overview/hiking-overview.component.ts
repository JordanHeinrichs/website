import { Component } from '@angular/core';
import { HIKING } from '../hiking-directory';

@Component({
  selector: 'app-hiking-overview',
  templateUrl: './hiking-overview.component.html',
  styleUrls: ['./hiking-overview.component.sass']
})
export class HikingOverviewComponent {

  constructor() { }

  public hikingTrips = HIKING;
}
