const request = require('request');

const apiKey = "b6f5b6a130e164abdbb2d77162b6fbd3";

const forecastLocation = (location, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${location.latitude},${location.longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const results = {
                address: location.address,
                summary: body.currently.summary,
                temperature: body.currently.temperature ? Math.round((body.currently.temperature - 32) * (5 / 9)) + "°C" : "No temperature for this location.",
            }
            callback(undefined, results);
        } else if (!error && response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else {
            callback('Unable to reach DarkSky servers.');
        }
    });
}

module.exports = {
    forecastLocation
};