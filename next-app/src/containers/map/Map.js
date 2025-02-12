import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import data from "./data.json";
import styles from "./Map.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGg1MDM0MDEiLCJhIjoiY203MWEzeWF2MGIwcjJrb2YyazB0azRseiJ9.Yv28GYHeWmE_wm7Qc0KrIw";

const Map = () => {
  const options = [
    {
      name: "Population",
      description: "Estimated total population",
      property: "pop_est",
      stops: [
        [0, "#f8d5cc"],
        [1000000, "#f4bfb6"],
        [5000000, "#f1a8a5"],
        [10000000, "#ee8f9a"],
        [50000000, "#ec739b"],
        [100000000, "#dd5ca8"],
        [250000000, "#c44cc0"],
        [500000000, "#9f43d7"],
        [1000000000, "#6e40e6"],
      ],
    },
    {
      name: "GDP",
      description: "Estimate total GDP in millions of dollars",
      property: "gdp_md_est",
      stops: [
        [0, "#f8d5cc"],
        [1000, "#f4bfb6"],
        [5000, "#f1a8a5"],
        [10000, "#ee8f9a"],
        [50000, "#ec739b"],
        [100000, "#dd5ca8"],
        [250000, "#c44cc0"],
        [5000000, "#9f43d7"],
        [10000000, "#6e40e6"],
      ],
    },
  ];
  const mapContainerRef = useRef(null);
  const [active, setActive] = useState(options[0]);
  const [map, setMap] = useState(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // 센터는 서울의 위경도
      center: [127.0016958, 37.5642135],
      // 줌도 모자라서 더 확대되도록 변경
      zoom: 10.0,
    });
    map.on("load", () => {
      map.addSource("countries", {
        type: "geojson",
        data,
      });

      map.setLayoutProperty("country-label", "text-field", [
        "format",
        ["get", "name_en"],
        { "font-scale": 1.2 },
        "\n",
        {},
        ["get", "name"],
        {
          "font-scale": 0.8,
          "text-font": [
            "literal",
            ["DIN Offc Pro Italic", "Arial Unicode MS Regular"],
          ],
        },
      ]);

      map.addLayer(
        {
          id: "countries",
          type: "fill",
          source: "countries",
        },
        "country-label"
      );

      map.setPaintProperty("countries", "fill-color", {
        property: active.property,
        stops: active.stops,
      });

      setMap(map);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  useEffect(() => {
    paint();
  }, [active]);

  const paint = () => {
    if (map) {
      map.setPaintProperty("countries", "fill-color", {
        property: active.property,
        stops: active.stops,
      });
    }
  };

  const changeState = (i) => {
    setActive(options[i]);
    map.setPaintProperty("countries", "fill-color", {
      property: active.property,
      stops: active.stops,
    });
  };

  return (
    <div>
      <div ref={mapContainerRef} className={styles.mapContainer} />
      {/*<Legend*/}
      {/*  active={active}*/}
      {/*  stops={active.stops}*/}
      {/*/>*/}
      {/*<Optionsfield*/}
      {/*  options={options}*/}
      {/*  property={active.property}*/}
      {/*  changeState={changeState}*/}
      {/*/>*/}
    </div>
  );
};

export default Map;
