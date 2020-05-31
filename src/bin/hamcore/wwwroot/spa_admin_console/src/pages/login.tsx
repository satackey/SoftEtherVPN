import React, { useState } from 'react'
import classNames from 'classnames'

export const Login: React.FC = () => {
  const [serverUrl, setServerUrl] = useState<string>(
    `https://${window.location.hostname}:${window.location.port}`
  )
  const [connectAsAdmin, setConnectAsAdmin] = useState(true)
  const [storedVirtualHub, setStoredVirtualHub] = useState(``)
  const [password, setPassword] = useState(``)
  const [loggingIn, setLoggingIn] = useState(false)

  const virtualHubWillBeUsed = connectAsAdmin
    ? `administrator`
    : storedVirtualHub
  const specifiedAdminByInput = storedVirtualHub === `administrator`
  const readyToLogin =
    // Todo: Add serverUrl validation
    serverUrl !== '' && virtualHubWillBeUsed !== '' && password !== ''

  const disabledServerUrl = loggingIn
  const disabledVirtualHub = connectAsAdmin || loggingIn
  const disabledConnectAsAdmin = specifiedAdminByInput || loggingIn
  const disabledPassword = loggingIn

  return (
    // https://codepen.io/Uipiki/pen/VNOoqB
    <div
      className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
      uk-height-viewport="true"
    >
      <div className="uk-width-1-1">
        <div className="uk-container">
          <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
            <div className="uk-width-1-1@m">
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                <h3 className="uk-card-title uk-text-center">
                  SoftEther VPN admin console
                </h3>
                <form>
                  <div className="uk-margin">
                    Server URL
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: server"
                      ></span>
                      <input
                        className="uk-input"
                        type="text"
                        placeholder="https://your-vpn-server.example.com:5555"
                        value={serverUrl}
                        disabled={disabledServerUrl}
                        onChange={e => setServerUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="uk-margin">
                    Virtual Hub Name
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: social"
                      ></span>
                      <input
                        className="uk-input"
                        type="text"
                        placeholder="VPN"
                        value={virtualHubWillBeUsed}
                        disabled={disabledVirtualHub}
                        onChange={e => setStoredVirtualHub(e.target.value)}
                      />
                    </div>
                    <div className="uk-margin-bottom uk-margin-small-top uk-grid-small uk-child-width-auto uk-grid">
                      <label>
                        <input
                          className="uk-checkbox"
                          type="checkbox"
                          checked={connectAsAdmin || specifiedAdminByInput}
                          disabled={disabledConnectAsAdmin}
                          onChange={() => setConnectAsAdmin(!connectAsAdmin)}
                        />
                        <span className="uk-margin-small-left">
                          Connect as an administrator
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="uk-margin">
                    Password
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        uk-icon="icon: lock"
                      ></span>
                      <input
                        className="uk-input"
                        type="password"
                        placeholder=""
                        value={password}
                        disabled={disabledPassword}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="uk-margin uk-text-center">
                    <button
                      className={classNames(
                        `uk-button`,
                        `uk-width-2-3`,
                        `tm-button-default`,
                        { [`uk-button-primary`]: readyToLogin }
                      )}
                      disabled={!readyToLogin || loggingIn}
                      onClick={e => {
                        setLoggingIn(true)
                        e.preventDefault()
                      }}
                    >
                      {loggingIn ? <div uk-spinner="true"></div> : 'Login'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
