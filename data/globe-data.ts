export const globeData = [
  {
    order: 1,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 19.0760, // Mumbai
    endLng: 72.8777,
    arcAlt: 0.2,
    color: "#FFF4E0", // cream color
  },
  {
    order: 2,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 13.0827, // Bangalore
    endLng: 80.2707,
    arcAlt: 0.2,
    color: "#FFF4E0",
  },
  {
    order: 3,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 22.5726, // Kolkata
    endLng: 88.3639,
    arcAlt: 0.2,
    color: "#FFF4E0",
  },
  {
    order: 4,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 13.0827, // Chennai
    endLng: 80.2707,
    arcAlt: 0.2,
    color: "#FFF4E0",
  },
  {
    order: 5,
    startLat: 22.5726, // Kolkata
    startLng: 88.3639,
    endLat: 13.0827, // Bangalore
    endLng: 80.2707,
    arcAlt: 0.2,
    color: "#FFF4E0",
  },
  {
    order: 6,
    startLat: 17.3850, // Hyderabad
    startLng: 78.4867,
    endLat: 28.6139, // Delhi
    endLng: 77.2090,
    arcAlt: 0.2,
    color: "#FFF4E0",
  },
  {
    order: 7,
    startLat: 23.0225, // Ahmedabad
    startLng: 72.5714,
    endLat: 19.0760, // Mumbai
    endLng: 72.8777,
    arcAlt: 0.1,
    color: "#FFF4E0",
  },
  {
    order: 8,
    startLat: 26.8467, // Jaipur
    startLng: 75.8067,
    endLat: 28.6139, // Delhi
    endLng: 77.2090,
    arcAlt: 0.1,
    color: "#FFF4E0",
  },
];

export const globeConfig = {
  pointSize: 2,
  globeColor: "#1e3a5f", // lighter navy/blue shade
  showAtmosphere: true,
  atmosphereColor: "#FFF4E0",
  atmosphereAltitude: 0.15,
  emissive: "#4a7ba7",
  emissiveIntensity: 0.3,
  shininess: 0.9,
  polygonColor: "rgba(255, 244, 224, 0.5)", // cream with more opacity
  ambientLight: "#FFF4E0",
  directionalLeftLight: "#FFF4E0",
  directionalTopLight: "#FFF4E0",
  pointLight: "#FFF4E0",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: {
    lat: 20.5937, // India center
    lng: 78.9629,
  },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
