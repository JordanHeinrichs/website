import axios from 'axios';
import simpleParallax from 'simple-parallax-js';

function loadParallax() {
  createParallax(document.querySelector('.main-splash__image'));
  createParallax(document.querySelector('.image-section__image'));

  function createParallax(element: HTMLImageElement) {
    const construct = () => {
      const parallax = new simpleParallax(element, {
        delay: 0.4,
        scale: 1.4,
        customContainer: document.querySelector('main')
      } as any);
    };

    element.complete ? construct() : element.addEventListener('load', construct);
  }
}

let map: google.maps.Map;
let infoWindow: google.maps.InfoWindow;

function initMap() {
  const mapProperties: google.maps.MapOptions = {
    center: new google.maps.LatLng(51.1, -115.3),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    gestureHandling: 'cooperative',
    mapTypeControl: false,
    streetViewControl: false,
  };
  map = new google.maps.Map(document.querySelector('.map-section--map'), mapProperties)
  map.data.loadGeoJson('/assets/strava-data.json');
  map.data.setStyle({
    strokeColor: 'blue',
    strokeWeight: 2.5
  });
  infoWindow = new google.maps.InfoWindow();
  loadMarkers();
}

interface Trip {
  title: string;
  img: string;
  coordinates: number[];
  content: string[];
}

function generateInfoContent(trip: Trip): string {
  let content =  `<div class="map-info"><h1>${trip.title}</h1><div class="map-info__content"><div class="map-info__text">`;
  trip.content.forEach(paragraph => content += `<p>${paragraph}</p>`);
  content += `</div><img class="map-info__img" src=${trip.img}>`
  content += '</div></div>';
  return content
}

async function loadMarkers() {
  try {
    const response = await axios.get('/assets/trips.json');
    response.data.forEach((trip: Trip) => {
      const marker = new google.maps.Marker({
        map,
        position: new google.maps.LatLng(trip.coordinates[0], trip.coordinates[1]),
        title: trip.title
      });
      marker.addListener('click', () => {
        infoWindow.setContent(generateInfoContent(trip));
        infoWindow.open(map, marker);
      })
    });
  } catch(error) {
  }
}

(window as any).initMap = initMap;
window.addEventListener('DOMContentLoaded', loadParallax);
