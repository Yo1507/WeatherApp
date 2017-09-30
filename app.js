const request = require('request');

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=18%20rue%20de%20la%20megisserie%2081300%20graulhet",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});