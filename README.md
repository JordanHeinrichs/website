# My Website

Simple website written written in TypeScript/ejs and bundled using webpack.
- Deployed/hosted using Github pages
- Originally written in Angular but given the simplicity of the site it ended up without a framework.

### Data processing algorithm:
0. Download all data from strava
1. Use gpsbabel to convert all tracks to geojson
2. Load all into memory
3. hex/rectangle bin it (30 m^2)
4. Generate table with column <bin/lat/lon, used>
5. Generate routes based on the following algorithm:
  Find unused bin
  1. Find adjacent hex bin, push onto route, mark both used
  2. Continue, finding unused
  3. If no more unused, look for adjacent used, add to route
  4. Jump back to start, look for adjacent, push front, mark both used
  Continue until no more unused bins
6. Export routes in one geojson file


### Steps to execute:
1. Download data dump from Strava
2. Unzip all activities with `gunzip *`
3. Run `sed -r -i 's/^\s+//g' *.tcx` to remove incorrect spacing
4. Run `npm run convert-input` (must be using gpsbabel 1.6)
5. Run `npm run combine-routes`
