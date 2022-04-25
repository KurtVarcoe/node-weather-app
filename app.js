const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=eeb7aa2c8f04c955b3be3200ffa7c277&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const temp = response.body.current.temperature
        const feelsLike = response.body.current.feelslike
        const weatherDescription = response.body.current.weather_descriptions[0]
        console.log(`${weatherDescription}. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out`)
    }
})

const locationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoia3VydHZhcmNvZSIsImEiOiJjbDJlcGRucmowMXk5M2lranZkZWw3ODJqIn0.jhbAj-fvdxSxG1qwh6WNVA&limit=1'

request({url: locationURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Location not found')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
} )