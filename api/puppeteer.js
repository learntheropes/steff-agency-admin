import {
  parse
} from 'qs'
import axios from 'axios'
import {
  allowOrigin,
  returnError,
  checkMethod
} from './lib'
import {
  authorize,
  unauthorizedResponse
} from './auth'

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
      token,
      id
    } = parse(queryStringParameters)

    const {
      data
    } = await axios.get(`https://coingrabs.vercel.app/api/offer/${id}`, {
      params: {
        token
      }
    })

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
