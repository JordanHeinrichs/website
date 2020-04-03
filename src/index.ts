import simpleParallax from 'simple-parallax-js';

const mainImage = document.querySelector('.main-splash__image') as HTMLImageElement;
const secondImage = document.querySelector('.image-section__image') as HTMLImageElement;

function createParallax(element: Element) {
  new simpleParallax(element, {
    delay: 0.4,
    scale: 1.4,
    customContainer: document.querySelector('main')
  } as any);
}

if (mainImage.complete) {
  createParallax(mainImage);
} else {
  mainImage.addEventListener('load', () => createParallax(mainImage));
}

if (secondImage.complete) {
  createParallax(secondImage);
} else {
  secondImage.addEventListener('load', () => createParallax(secondImage));
}

let map: google.maps.Map;
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
}

(window as any).initMap = initMap;
