import makeError from 'make-error'

export const LoginFailedError = makeError(`LoginFailedError`, Error)
export const LoginFailedInvalidServerUrlInputError = makeError(
  `LoginFailedInvalidServerUrlInputError`,
  LoginFailedError
)
export const LoginFailedProtocolMismatchError = makeError(
  `LoginFailedProtocolMismatchError`,
  LoginFailedError
)
export const LoginFailedHostnameMismatchError = makeError(
  `LoginFailedHostnameMismatchError`,
  LoginFailedError
)
export const LoginFailedPortOutOfRangeError = makeError(
  `LoginFailedPortOutOfRangeError`,
  LoginFailedError
)
