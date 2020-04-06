import simpleParallax from 'simple-parallax-js';

function loadParallax() {
  createParallax(document.querySelector('.main-splash__image'));
  createParallax(document.querySelector('.image-section__image'));

  function createParallax(element: HTMLImageElement) {
    const construct = () => {
      new simpleParallax(element, {
        delay: 0.4,
        scale: 1.4,
        customContainer: document.querySelector('main')
      } as any);
    };

    element.complete ? construct() : element.addEventListener('load', construct);
  }
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
  map.data.loadGeoJson('/assets/strava-data.json.gz');
  map.data.setStyle({
    strokeColor: 'blue',
    strokeWeight: 2.5
  });
}

(window as any).initMap = initMap;
window.addEventListener('DOMContentLoaded', loadParallax);
