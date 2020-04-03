import simpleParallax from 'simple-parallax-js';

const mainImage = new simpleParallax(document.querySelector('.main-splash__image'), {
  delay: 0.4,
  scale: 1.4,
  customContainer: document.querySelector('main')
} as any);

const secondImage = new simpleParallax(document.querySelector('#secondImage'), {
  delay: 0.4,
  scale: 1.4,
  customContainer: document.querySelector('main')
} as any);

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
