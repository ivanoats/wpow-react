exports.handler = async event => {
  const conditions = event.queryStringParameters.name || 'KSEA'

  return {
    statusCode: 200,
    body: `conditions for ${conditions}`
  }

}