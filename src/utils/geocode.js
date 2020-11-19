const request = require('request')

const geocode = (address, callback) => {
    const uri = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZW1tYW51ZWxhbWV0IiwiYSI6ImNraGVwYjFkdTAwczgyenFxZnlqa2RpcG8ifQ.VPwTk_y3Pd4D9ypLU7CaDA&limit=1'
    request({ url: uri, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Location not found, try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode