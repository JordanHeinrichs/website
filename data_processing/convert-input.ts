import * as path from 'path';
import * as fs from 'fs';
import {execSync} from 'child_process';

const currentDirectory = __dirname;

function convertFile(input: string, inputType: string, output: string): void {
  execSync(`gpsbabel -t -i ${inputType} -f ${input} -x nuketypes,routes,waypoints -o geojson,compact=1 -F ${path.join(output)}`);
}

function main(): void {
  const inputFolder = path.join(currentDirectory, 'input_data');
  const outputFolder = path.join(currentDirectory, 'input_converted');
  const files = fs.readdirSync(inputFolder);
  for (let i = 0; i < files.length; ++i) {
    const filename = files[i];
    if (/\.fit$/.test(filename)) {
      convertFile(path.join(inputFolder, filename), 'garmin_fit', path.join(outputFolder, i + '.geojson'));
    } else if (/\.gpx$/.test(filename)) {
      convertFile(path.join(inputFolder, filename), 'gpx', path.join(outputFolder, i + '.geojson'));
    } else if (/\.tcx$/.test(filename)) {
      convertFile(path.join(inputFolder, filename), 'gtrnctr', path.join(outputFolder, i + '.geojson'));
    } else {
      console.log('Unhandled file format');
    }
  }
}

main();
