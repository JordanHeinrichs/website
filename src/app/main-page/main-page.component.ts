import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('loadInFade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', animate('800ms')),
      transition(':leave', animate('300ms')),
    ])
  ]

})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('mainImage') mainImage: ElementRef;
  @ViewChild('secondImage') secondImage: ElementRef;
  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new simpleParallax(this.mainImage.nativeElement, {
      delay: 0.4,
      scale: 1.4,
      customContainer: this.main.nativeElement
    } as any);

    new simpleParallax(this.secondImage.nativeElement, {
      delay: 0.4,
      scale: 1.4,
      customContainer: this.main.nativeElement
    } as any);

    const mapProperties: google.maps.MapOptions = {
      center: new google.maps.LatLng(51.1, -115.3),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      gestureHandling: 'cooperative',
      mapTypeControl: false,
      streetViewControl: false,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties)
    this.map.data.loadGeoJson('/assets/strava-data.json');
    this.map.data.setStyle({
      strokeColor: 'blue',
      strokeWeight: 2.5
    });
  }
}
