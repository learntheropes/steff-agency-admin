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
import dotenv from 'dotenv'
dotenv.config()

exports.handler = async ({
  httpMethod,
  headers
}) => {
  try {
    const notAllowed = checkMethod(httpMethod, 'POST', 'content-type, authorization')
    if (notAllowed) return notAllowed

    const authorized = await authorize(headers)
    if (!authorized) return unauthorizedResponse

    const url = `https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITEID}/builds`

    const {
      status,
      data
    } = await axios.post(url, {}, {
      params: {
        'access_token': process.env.NETLIFY_TOKEN
      },
      headers: {
        'User-Agent': process.env.NETLIFY_AGENT
      }
    })

    return {
      statusCode: status,
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
