# MyWebsite

https://github.com/sacridini/Awesome-Geospatial

Plan for data processing:
0. Download all data from strava DONE
1. Use gpsbabel to convert all tracks to geojson DONE
2. Load all into postgis or SpatiaLite/Geospatial or just sqlite or just in memory data structure DONE
3. hex/rectangle bin it (30 m^2?) DONE
4. Generate table with column <bin/lat/lon, used> DONE
5. Generate routes based on the following algorithm: DONE
  Find unused bin
  1. Find adjacent hex bin, push onto route, mark both used
  2. Continue, finding unused
  3. If no more unused, look for adjacent used, add to route
  4. Jump back to start, look for adjacent, push front, mark both used
  Continue until no more unused bins
6. Export routes in one geojson file DONE


Steps:
1. Download data dump from Strava
2. Unzip all activities with `gunzip *`
3. Run `sed -r -i 's/^\s+//g' *.tcx` to remove incorrect spacing
4. Run convert-input (must be using gpsbabel 1.6)
5. Run combine-routes

Overall remaining work:
1. Finish data processing DONE
2. Load into google maps DONE
3. Figure out image hosting/compression/etc
4. Cleanup frontend (likely ditch Angular and go lightweight)
5. Figure out hosting/deployment
6. Get HTTPS cert
7. Add in description/key points/images to the map
8. Write readme file
