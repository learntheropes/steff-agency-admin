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
  body
}) => {
  try {
    const notAllowed = checkMethod(httpMethod, 'POST', 'content-type, authorization')
    if (notAllowed) return notAllowed

    const authorized = await authorize(headers)
    if (!authorized) return unauthorizedResponse

    const {
      ref,
      collection
    } = JSON.parse(body)

    const response = client.query(
      q.Delete(
        q.Ref(q.Collection(collection), parseInt(ref))
      )
    )

    return {
      statusCode: 200,
      body: JSON.stringify(response),
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
