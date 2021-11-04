const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((err, ip) => {
  if (err) {
    console.log("It didn't work", err);
    return;
  }

  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (err, coordinates) => {

    if (err) {
      console.log("It didn't work", err);
      return;
    }

    fetchISSFlyOverTimes(coordinates, (err, passTimes) => {
      if (err) {
        console.log("It didn't work!", err);
        return;
      };

      console.log('It worked! Returned flyover times:', passTimes);
    })

  });
});




