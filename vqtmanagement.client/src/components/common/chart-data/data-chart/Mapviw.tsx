import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [21.028333,105.853333],
      zoom: 5,
      maxZoom: 6
    });

    mapRef.current.on('style.load', () => {
      mapRef.current.addSource('urban-areas', {
        type: 'geojson',
        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_50m_urban_areas.geojson'
      });

      mapRef.current.addLayer({
        id: 'urban-areas-fill',
        type: 'fill',
        slot: 'middle',
        source: 'urban-areas',
        layout: {},
        paint: {
          'fill-color': '#f08',
          'fill-opacity': 0.4
        }
      });
    });
  }, []);

  return <div id="map" style={{ height: '100%' }} ref={mapContainerRef} />;
};

export default MapboxExample;