const fetch = require('node-fetch')

exports.handler = async function(event, context) {
    const search = event.queryStringParameters.search
    const category = event.queryStringParameters.category
    const country = event.queryStringParameters.country
    const APIKey = "&apiKey=7801956d0e08493f86b4ea7ecfa09769"
    const baseUrl = "https://newsapi.org/v2"
    let response, APIUrl

    try {
        search ?
        APIUrl = `${baseUrl}/everything?q=${search}${APIKey}`
        :
        APIUrl = `${baseUrl}/top-headlines?category=${category}&country=${country}&pageSize=100${APIKey}`

        response = await fetch(APIUrl)
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
              error: err.message
            })
        }
    }

    return {
        statusCode: 200,
        body: response
    };
}