import { Component, OnInit } from '@angular/core';
import { MenuLink } from '../sidenav/sidenav.component';
import { getMenuList } from '../blog-list/blog';
import { RUNNING } from './running-directory';

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.sass']
})
export class RunningComponent implements OnInit {
  public linkList: MenuLink[] = [];

  constructor() { }

  public ngOnInit() {
    this.linkList = getMenuList(RUNNING);
  }
}
