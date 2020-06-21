import {
  LOGIN_REQUEST,
  StartLoginAction,
  LoginFailureAction,
  LOGIN_FAILURE,
  LoginSuccessAction,
  LOGIN_SUCCESS
} from './types'

export const login = (
  serverUrl: string,
  virtualHub: string,
  password: string
): StartLoginAction => ({
  type: LOGIN_REQUEST,
  payload: {
    serverUrl,
    virtualHub,
    password
  }
})

export const loginFailed = (error: Error): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: {
    error
  }
})

export const loginSucceeded = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS
})
