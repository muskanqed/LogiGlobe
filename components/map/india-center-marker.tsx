"use client";

import { useEffect } from "react";
import { useMap } from "@/context/map-context";

export default function IndiaCenterMarker() {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    // Wait for map to load
    const onLoad = () => {
      // Add a pulsing dot at India's center
      const size = 100;

      // Create a custom image for the pulsing dot
      const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // Draw the circle on the canvas
        onAdd: function () {
          const canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },

        // Render the pulsing dot
        render: function () {
          const duration = 1500;
          const t = (performance.now() % duration) / duration;

          const radius = (size / 2) * 0.3;
          const outerRadius = (size / 2) * 0.7 * t + radius;
          const context = this.context;

          // Clear the canvas
          context.clearRect(0, 0, this.width, this.height);

          // Draw the outer pulsing circle
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          context.fillStyle = `rgba(239, 68, 68, ${1 - t})`;
          context.fill();

          // Draw the inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(239, 68, 68, 1)";
          context.fill();
          context.strokeStyle = "white";
          context.lineWidth = 2 + 4 * (1 - t);
          context.stroke();

          // Update the image data
          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // Trigger a redraw
          map.triggerRepaint();

          return true;
        },
      };

      // Add the image to the map
      if (!map.hasImage("pulsing-dot")) {
        map.addImage("pulsing-dot", pulsingDot as any, { pixelRatio: 2 });
      }

      // Add a source and layer for the marker
      if (!map.getSource("india-center")) {
        map.addSource("india-center", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [78.9629, 20.5937],
                },
                properties: {},
              },
            ],
          },
        });

        map.addLayer({
          id: "india-center-layer",
          type: "symbol",
          source: "india-center",
          layout: {
            "icon-image": "pulsing-dot",
            "icon-allow-overlap": true,
          },
        });
      }
    };

    if (map.loaded()) {
      onLoad();
    } else {
      map.on("load", onLoad);
    }

    return () => {
      // Cleanup
      if (map.getLayer("india-center-layer")) {
        map.removeLayer("india-center-layer");
      }
      if (map.getSource("india-center")) {
        map.removeSource("india-center");
      }
      if (map.hasImage("pulsing-dot")) {
        map.removeImage("pulsing-dot");
      }
    };
  }, [map]);

  return null;
}
