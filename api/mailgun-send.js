import {
  mg
} from './mailgun'
import {
  allowOrigin,
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
  body,
  headers
}) => {
  try {
    const notAllowed = checkMethod(httpMethod, 'POST', 'content-type, authorization')
    if (notAllowed) return notAllowed

    const authorized = await authorize(headers)
    if (!authorized) return unauthorizedResponse

    const {
      email,
      offerId
    } = JSON.parse(body)
    await mg.messages().send({
      from: process.env.MAILGUN_EMAIL,
      to: email,
      subject: `Steff Agency | Oferta # ${offerId}`,
      text: `Thank you for contancting Steff Agency\nPlease see our offer here: https://steff.agency/oferta/${offerId} .\nIf you like our offer you can confirm the booking by paynig a deposit here: https://steff.agency/pagos/reserva/${offerId} `
    })

    return {
      statusCode: 200,
      body: 'Mail sent successfully',
      headers: {
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Headers': 'content-type'
      }
    }
  } catch ({
    message
  }) {
    return {
      statusCode: 422,
      body: `Error: ${message}`,
      headers: {
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Headers': 'content-type'
      }
    }
  }
}
