export const globeData = [
  // India domestic routes
  {
    order: 1,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 19.0760, // Mumbai
    endLng: 72.8777,
    arcAlt: 0.2,
    color: "#06b6d4", // cyan
  },
  {
    order: 2,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 13.0827, // Bengalore
    endLng: 77.5877,
    arcAlt: 0.2,
    color: "#3b82f6", // blue
  },
  {
    order: 3,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 13.0827, // Chennai
    endLng: 80.2707,
    arcAlt: 0.2,
    color: "#6366f1", // indigo
  },
  {
    order: 4,
    startLat: 22.5726, // Kolkata
    startLng: 88.3639,
    endLat: 28.6139, // Delhi
    endLng: 77.2090,
    arcAlt: 0.2,
    color: "#06b6d4", // cyan
  },

  // International routes from India
  {
    order: 5,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 25.2048, // Dubai
    endLng: 55.2708,
    arcAlt: 0.3,
    color: "#3b82f6", // blue
  },
  {
    order: 6,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.4,
    color: "#6366f1", // indigo
  },
  {
    order: 7,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 51.5074, // London
    endLng: -0.1278,
    arcAlt: 0.6,
    color: "#06b6d4", // cyan
  },
  {
    order: 8,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 40.7128, // New York
    endLng: -74.0060,
    arcAlt: 0.7,
    color: "#3b82f6", // blue
  },
  {
    order: 9,
    startLat: 13.0827, // Bangalore
    startLng: 77.5877,
    endLat: 37.7749, // San Francisco
    endLng: -122.4194,
    arcAlt: 0.7,
    color: "#6366f1", // indigo
  },
  {
    order: 10,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 35.6762, // Tokyo
    endLng: 139.6503,
    arcAlt: 0.5,
    color: "#06b6d4", // cyan
  },
  {
    order: 11,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: -33.8688, // Sydney
    endLng: 151.2093,
    arcAlt: 0.6,
    color: "#3b82f6", // blue
  },
  {
    order: 12,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 48.8566, // Paris
    endLng: 2.3522,
    arcAlt: 0.5,
    color: "#6366f1", // indigo
  },
  {
    order: 13,
    startLat: 13.0827, // Chennai
    startLng: 80.2707,
    endLat: 22.3193, // Hong Kong
    endLng: 114.1694,
    arcAlt: 0.4,
    color: "#06b6d4", // cyan
  },
  {
    order: 14,
    startLat: 22.5726, // Kolkata
    startLng: 88.3639,
    endLat: 3.1390, // Kuala Lumpur
    endLng: 101.6869,
    arcAlt: 0.3,
    color: "#3b82f6", // blue
  },
  {
    order: 15,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 52.5200, // Berlin
    endLng: 13.4050,
    arcAlt: 0.5,
    color: "#6366f1", // indigo
  },
  {
    order: 16,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 34.0522, // Los Angeles
    endLng: -118.2437,
    arcAlt: 0.7,
    color: "#06b6d4", // cyan
  },
  {
    order: 17,
    startLat: 13.0827, // Bangalore
    startLng: 77.5877,
    endLat: -1.2921, // Nairobi
    endLng: 36.8219,
    arcAlt: 0.4,
    color: "#3b82f6", // blue
  },
  {
    order: 18,
    startLat: 28.6139, // Delhi
    startLng: 77.2090,
    endLat: 39.9042, // Beijing
    endLng: 116.4074,
    arcAlt: 0.3,
    color: "#6366f1", // indigo
  },
  {
    order: 19,
    startLat: 19.0760, // Mumbai
    startLng: 72.8777,
    endLat: 55.7558, // Moscow
    endLng: 37.6173,
    arcAlt: 0.5,
    color: "#06b6d4", // cyan
  },
  {
    order: 20,
    startLat: 13.0827, // Chennai
    startLng: 80.2707,
    endLat: -6.2088, // Jakarta
    endLng: 106.8456,
    arcAlt: 0.4,
    color: "#3b82f6", // blue
  },
];

export const globeConfig = {
  pointSize: 4,
  globeColor: "#062056", // deep blue
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)", // semi-transparent white
  ambientLight: "#38bdf8", // cyan ambient light
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
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
