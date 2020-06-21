import { VpnServerRpc } from 'vpnrpc'

import * as errors from './ApiErrors'

export interface LoginCredentials {
  serverUrl: string
  virtualHub: string
  password: string
}

export async function login(
  loginCredentials: LoginCredentials
): Promise<VpnServerRpc> {
  const serverUrlPattern = /^(https?):\/\/([a-z0-9.]+):?([0-9]+)?(\/.*)?$/
  const matched = serverUrlPattern.exec(loginCredentials.serverUrl)
  console.debug({ matched, serverUrlPattern })

  if (matched == null) {
    throw new errors.LoginFailedInvalidServerUrlInputError()
  }
  if (typeof matched[1] !== 'string') {
    throw new errors.LoginFailedProtocolMismatchError()
  }
  // const protocol = matched[1]

  if (typeof matched[2] !== 'string') {
    throw new errors.LoginFailedHostnameMismatchError()
  }
  const hostname = matched[2]

  const port = Number.isNaN(parseInt(matched[3], 10))
    ? 443
    : parseInt(matched[3], 10)
  if (port < 1 || port > 65535) {
    throw new errors.LoginFailedPortOutOfRangeError()
  }

  const vpn = new VpnServerRpc(
    hostname,
    port,
    loginCredentials.virtualHub,
    loginCredentials.password
  )

  console.debug(await vpn.GetServerInfo())
  return vpn
}
