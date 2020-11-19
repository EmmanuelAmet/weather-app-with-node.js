const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const uri = 'http://api.weatherstack.com/current?access_key=d09526cc3ec88d550c6fb854715a675b&query=' +
        latitude + ',' + longitude + '&units=f'

    request({ url: uri, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (response.body.error) {
            callback('Location not found.', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently: ' + response.body.current.temperature + ' degree out and it feelslike: ' + response.body.current.feelslike)
        }
    })
}
module.exports = forecast