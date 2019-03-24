import { Component, OnInit } from '@angular/core';
import { HIKING } from './hiking-directory';
import { MenuLink } from '../sidenav/sidenav.component';
import { getMenuList } from '../blog-list/blog';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.sass']
})
export class HikingComponent implements OnInit {
  public linkList: MenuLink[] = [];

  constructor() { }

  public ngOnInit() {
    this.linkList = getMenuList(HIKING);
  }
}
