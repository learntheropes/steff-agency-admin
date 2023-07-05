export default async function ({ $auth }) {
  if ($auth.user && process.env.AUTHORIZED_EMAILS.split(',').indexOf($auth.user.email) === -1) {
    await $auth.logout()
  }
}