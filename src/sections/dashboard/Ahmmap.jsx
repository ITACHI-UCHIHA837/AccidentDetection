import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function AhmedabadMap() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [72.5714, 23.0225], // Ahmedabad
      zoom: 11,
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: "600px" }} />;
}

export default AhmedabadMap;