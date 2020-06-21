import { Actions, ActionTypes } from './types'

export const startLogin = (
  serverUrl: string,
  virtualHub: string,
  password: string
): Actions['StartLoginAction'] => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload: {
    serverUrl,
    virtualHub,
    password
  }
})

export const loginFailed = (error: Error): Actions['LoginFailureAction'] => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: {
    error
  }
})

export const loginSucceeded = (): Actions['LoginSuccessAction'] => ({
  type: ActionTypes.LOGIN_SUCCESS
})
