const {fetchMyIP} = require("./iss");

fetchMyIP((err,ip)=> {
  if (err) {
    console.log("It didn't work" , error);
    return 
  }

  console.log('It worked! Returned IP:' , ip);
});

