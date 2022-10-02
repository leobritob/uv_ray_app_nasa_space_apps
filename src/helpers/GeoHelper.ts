const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function getCurrentLocation(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        const { coords } = position;

        console.log('Your current position is:');
        console.log(`Latitude : ${coords.latitude}`);
        console.log(`Longitude: ${coords.longitude}`);
        console.log(`More or less ${coords.accuracy} meters.`);

        resolve(coords);
      },
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      },
      options
    );
  });
}

export const GeoHelper = {
  getCurrentLocation,
};
