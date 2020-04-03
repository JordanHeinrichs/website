import * as path from 'path';
import * as fs from 'fs';
import { FeatureCollection, Position, Feature, LineString } from 'geojson';

const binSize = 70; // Meters
// Doesn't really matter what it is. The bins don't need to be exactly the same size everywhere
const centerLatitude = 51;
const binHeightLat = meterToLatitude(binSize);
const binWidthLong = metersToLongitude(binSize);
const sourceDirectory = path.join(__dirname, 'input_converted');
const destDirectory = path.join(__dirname, 'processed_data');

// Map<latitude, Map<longitude, count>>
interface DataBin {
  count: number;
  used: boolean;
}
type DataBins = Map<number, Map<number, DataBin>>;
type IndexCoordinate = {lat: number; long: number;};

function meterToLatitude(meter: number): number {
  // formula from https://en.wikipedia.org/wiki/Geographic_coordinate_system
  const latitude = centerLatitude * Math.PI / 180;
  const meterToLatitudeConv =  111132.954 - 559.822 * Math.cos(2 * latitude) +
      1.175 * Math.cos(4 * latitude) - 0.0023 * Math.cos(6 * latitude);
  return meter / Math.abs(meterToLatitudeConv);
}

function metersToLongitude(meter: number): number {
  // formula from https://en.wikipedia.org/wiki/Geographic_coordinate_system
  const latitude = centerLatitude * Math.PI / 180;
  const meterToLongitudeConv =  111412.84 * Math.cos(latitude) -
      93.5 * Math.cos(3 * latitude) +
      0.118 * Math.cos(5 * latitude);
  return meter / Math.abs(meterToLongitudeConv);
}

function addCoordinate(coordinate: Position, dataBins: DataBins) {
  const latIndex = Math.round(coordinate[0] / binHeightLat);
  const longIndex = Math.round(coordinate[1] / binWidthLong);
  if (!dataBins.has(latIndex)) {
    dataBins.set(latIndex, new Map());
  }
  const longMap = dataBins.get(latIndex);
  if (longMap.has(longIndex)) {
    longMap.get(longIndex).count++;
  } else {
    longMap.set(longIndex, {
      count: 1,
      used: false,
    });
  }
}

function loadAllFiles(): DataBins {
  const dataBins: DataBins = new Map();
  const files = fs.readdirSync(sourceDirectory);
  for (const filename of files) {
    const geojson: FeatureCollection = JSON.parse(fs.readFileSync(path.join(sourceDirectory, filename), 'utf8'));
    geojson.features.forEach(feature => {
      if (feature.geometry.type === 'LineString') {
        feature.geometry.coordinates.forEach(coordinate => addCoordinate(coordinate, dataBins));
      }
    });
  }
  return dataBins;
}

function findNextUnused(point: IndexCoordinate, dataBins: DataBins): IndexCoordinate {
  // Find the 8 points that could be adjacent;
  const pointsToTry: IndexCoordinate[] = [{
      lat: point.lat + 1,
      long: point.long,
    },
    {
      lat: point.lat + 1,
      long: point.long + 1,
    },
    {
      lat: point.lat,
      long: point.long + 1,
    },
    {
      lat: point.lat - 1,
      long: point.long + 1,
    },
    {
      lat: point.lat - 1,
      long: point.long,
    },
    {
      lat: point.lat - 1,
      long: point.long - 1,
    },
    {
      lat: point.lat,
      long: point.long - 1,
    },
    {
      lat: point.lat + 1,
      long: point.long - 1,
    },
  ];
  return pointsToTry.find(proposedPoint => {
    if (dataBins.has(proposedPoint.lat)) {
      const longMap = dataBins.get(proposedPoint.lat);
      if (longMap.has(proposedPoint.long)) {
        const data = longMap.get(proposedPoint.long);
        if (!data.used) {
          return true;
        }
      }
    }
    return false;
  });
}

function getCoordinateFromIndex(point: IndexCoordinate): Position {
  return [point.lat * binHeightLat, point.long * binWidthLong];
}

function setPointUsed(point: IndexCoordinate, dataBins: DataBins): void {
  dataBins.get(point.lat).get(point.long).used = true;
}

function createPath(startLatIndex: number, startLongIndex: number, dataBins: DataBins): Feature<LineString> {
  const startPoint = {lat: startLatIndex, long: startLongIndex};
  const coordinates: Position[] = [getCoordinateFromIndex(startPoint)];

  let currentPoint: IndexCoordinate = startPoint;
  setPointUsed(currentPoint, dataBins);
  while (true) {
    const nextPoint = findNextUnused(currentPoint, dataBins);
    if (!nextPoint) break;
    setPointUsed(nextPoint, dataBins);
    coordinates.push(getCoordinateFromIndex(nextPoint));
    currentPoint = nextPoint;
  }

  currentPoint = startPoint;
  while (true) {
    const nextPoint = findNextUnused(currentPoint, dataBins);
    if (!nextPoint) break;
    setPointUsed(nextPoint, dataBins);
    coordinates.unshift(getCoordinateFromIndex(nextPoint));
    currentPoint = nextPoint;
  }

  if (coordinates.length === 1) {
    console.log(`Lonely point that doesn't belong on a path at ${startLatIndex} ${startLongIndex}`);
    return null;
  }

  return {
    geometry: {
      coordinates,
      type: 'LineString',
    },
    properties: {},
    type: 'Feature'
  };
}

function jsonReplacer(key, value) {
  // limit precision of floats
    if (typeof value === 'number') {
        return parseFloat(value.toFixed(4)); // Approx 11 m
    }
    return value;
}

function createPaths(dataBins: DataBins) {
  const paths: Feature<LineString>[] = [];
  dataBins.forEach((longMap, latIndex) => {
    longMap.forEach((bin, longIndex) => {
      if (!bin.used) {
        const newPath = createPath(latIndex, longIndex, dataBins);
        if (newPath) {
          paths.push(newPath);
        }
      }
    });
  });

  const featureCollection: FeatureCollection = {
    type: 'FeatureCollection',
    features: paths
  };
  fs.writeFileSync(path.join(destDirectory, 'bin-data.json'), JSON.stringify(featureCollection, jsonReplacer));
}

function main() {
  console.log(`Bin are ${binSize} m and in lat/long ${binHeightLat}/${binWidthLong}`);
  const dataBins = loadAllFiles();

  let totalCoordinates = 0;
  dataBins.forEach(longMap =>  totalCoordinates += longMap.size);
  console.log(`Total number of coordinates are: ${totalCoordinates}`);

  createPaths(dataBins);
}

main();
