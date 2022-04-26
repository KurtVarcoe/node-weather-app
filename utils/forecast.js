const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=eeb7aa2c8f04c955b3be3200ffa7c277&query=${longitude},${latitude}&units=f`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }  else {
            const temp = response.body.current.temperature
            const feelsLike = response.body.current.feelslike
            const weatherDescription = response.body.current.weather_descriptions[0]
            callback(undefined, `${weatherDescription}. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out`)
        }
    })
}

module.exports = forecast