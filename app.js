const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userInput = process.argv[2]

if (!userInput) {
    console.log('Please specify a location!')
} else {
    geocode(userInput, (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })    
}