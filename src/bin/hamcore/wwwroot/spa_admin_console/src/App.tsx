import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
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
                      />
                    </div>
                    <div className="uk-margin-bottom uk-margin-small-top uk-grid-small uk-child-width-auto uk-grid">
                      <label>
                        <input className="uk-checkbox" type="checkbox" />
                        Connect as administrator
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
                      />
                    </div>
                  </div>
                  <div className="uk-margin uk-text-center">
                    <button className="uk-button uk-button-primary uk-button uk-width-2-3 tm-button-default">
                      Login
                    </button>
                  </div>
                  <div className="uk-text-small">
                    {/* Not registered? <a href="#">Create an account</a> */}
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

export default App
