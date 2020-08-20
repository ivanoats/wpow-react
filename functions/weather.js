const got = require('got');

exports.handler = async event => {
  const station = event.queryStringParameters.station || 'KSEA'

  try {
    // @ts-ignore
    const observations = await got(`https://api.weather.gov/stations/${station}/observations`)
    return {
      statusCode: 200,
      body: observations.body
    }
  
  } catch (error) {
    return {
      statusCode: 500,
      body: error
    }
  }

}