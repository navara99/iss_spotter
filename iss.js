const request = require("request");

const fetchMyIP = function (callback) {
  const apiEndpoint = "https://api.ipify.org/?format=json";

  request(apiEndpoint, (err, res, data) => {
    if (err) return callback(err, null);

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(data).ip;
    callback(null, ip);
  });

};

const fetchCoordsByIP = (ip, callback) => {
  const apiEndpoint = `https://freegeoip.app/json/${ip}`;

  request(apiEndpoint, (err, res, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates for IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(data);
    callback(null, { latitude, longitude });
  })

}

const fetchISSFlyOverTimes = ({longitude,latitude}, callback)=> {
  const apiEndpoint = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;


  request(apiEndpoint , (err,res,data)=> {
    if (err) {
      callback(err, null);
      return;
    };

    if (res.statusCode !== 200) {
      callback(Error(`Status Code ${res.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(data).response;
    callback(null, passes);
  });



}

module.exports = { fetchMyIP, fetchCoordsByIP , fetchISSFlyOverTimes };