import {
  parse
} from 'qs'
import {
  allowOrigin,
  returnError,
  checkMethod
} from './lib'
import {
  authorize,
  unauthorizedResponse
} from './auth'
import {
  q,
  client
} from './fauna'

exports.handler = async ({
  httpMethod,
  headers,
  queryStringParameters
}) => {
  try {
    const notAllowed = checkMethod(httpMethod, 'GET', 'authorization')
    if (notAllowed) return notAllowed

    const authorized = await authorize(headers)
    if (!authorized) return unauthorizedResponse

    const {
      ref,
      collection
    } = parse(queryStringParameters)
    const {
      data
    } = await client.query(
      q.Get(q.Ref(q.Collection(collection), ref))
    )

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': allowOrigin
      }
    }
  } catch ({
    message
  }) {
    return returnError(message)
  }
}
