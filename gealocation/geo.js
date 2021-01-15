
function checkGeoСompatibility () {return !!navigator.geolocation;};

function findCoordinates () {
  let x;
  let y;

  window.onload = function() {
    let startPos;

    const geoOptions = { 
      maximumAge: 10, 
      timeout: 5 * 60 * 1000,
    }

    const geoSuccess = function(position) {
      startPos = position;
      x = startPos.coords.latitude;
      y = startPos.coords.longitude;
      // return {
      //   x: startPos.coords.latitude,
      //   y: startPos.coords.longitude,
      //   position,
      // }
    };

    const geoError = async function(error) {
      console.log(`Error occurred. Error code: ${error.code}`);
    };
  
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  };
}


export default function geolocation() {
  if (!checkGeoСompatibility()) {return};
  const position = findCoordinates();
  return position;
}

