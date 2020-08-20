exports.handler = async event => {
  const conditions = event.queryStringParameters.station || 'KSEA'

  return {
    statusCode: 200,
    body: `conditions for ${conditions}`
  }

}