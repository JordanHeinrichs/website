import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('mainImage') mainImage: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new simpleParallax(this.mainImage.nativeElement, {
      delay: 0.4,
      scale: 1.4,
      customContainer: this.main.nativeElement
    } as any);
  }

}
