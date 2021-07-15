const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=aa60db4cf524ddb1ed2cb9a8d6fd181d&query=45, -75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data +chunk.toString()
    })

    response.on('end', () => {
        const body =JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('an error', error)
})
request.end()