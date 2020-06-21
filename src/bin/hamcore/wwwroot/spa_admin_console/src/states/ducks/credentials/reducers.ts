import {
  LOGIN_REQUEST,
  // LOGGED_OUT,
  CredentialsState,
  // LoginCredentials,
  CredentialsActionTypes
} from './types'

const initialState: CredentialsState = {
  requestedLogin: false,
  connected: false,
  loggedIn: false,
  serverUrl: '',
  virtualHub: '',
  password: ''
}

export const credentialsReducer = (
  action?: CredentialsActionTypes,
  state = initialState
): CredentialsState => {
  if (action === undefined) {
    return state
  }
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        requestedLogin: true,
        ...action.payload
      })

    default:
      return state
  }
}
