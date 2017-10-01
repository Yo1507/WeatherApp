// PACKAGES
const yargs = require('yargs');
// CLASSES
const geocode = require('./geocode/geocode.js');
const forecast = require('./forecast/forecast.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv.a);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        forecast.forecastLocation(results, (errorMessage, forecastResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Weather at location: ${forecastResults.address}`);
                console.log(`Summary: ${forecastResults.summary}`);
                console.log(`Temperature: ${forecastResults.temperature}`);
            }
        });
    }
});