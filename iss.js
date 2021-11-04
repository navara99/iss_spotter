const request = require("request");

const fetchMyIP = function (callback) {
  const apiEndpoint = "https://api.ipify.org/?format=json";
  
  request(apiEndpoint, (err, res, data) => {
    if (err) return callback(err, null)

    if (res.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(data).ip;
    callback(null, ip);
  })

}

module.exports = { fetchMyIP };