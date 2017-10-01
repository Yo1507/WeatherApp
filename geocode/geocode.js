const request = require('request');

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'OK') {
            const results = {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            }
            callback(undefined, results);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else {
            callback('Unknown response.');
        }
    });
}

module.exports = {
    geocodeAddress
};