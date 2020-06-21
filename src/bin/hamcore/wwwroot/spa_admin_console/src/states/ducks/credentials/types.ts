import { Action } from 'redux'

export interface LoginCredentials {
  serverUrl: string
  virtualHub: string
  password: string
}

export interface CredentialsState {
  requestedLogin: boolean
  connected: boolean
  loggedIn: boolean
  serverUrl: string
  virtualHub: string
  password: string
}

export const LOGIN_REQUEST = `LOGIN_REQUEST` as const
export const LOGIN_SUCCESS = `LOGIN_SUCCESS` as const
export const LOGIN_FAILURE = `LOGIN_FAILURE` as const
export const LOGGED_OUT = `LOGGED_OUT` as const

export interface StartLoginAction extends Action {
  type: typeof LOGIN_REQUEST
  payload: LoginCredentials
}

export interface LoginSuccessAction extends Action {
  type: typeof LOGIN_SUCCESS
  payload?: never
}

export interface LoginFailureAction extends Action {
  type: typeof LOGIN_FAILURE
  payload: {
    error: Error
  }
}

export interface LogoutAction extends Action {
  type: typeof LOGGED_OUT
  payload?: never
}

export type CredentialsActionTypes = StartLoginAction | LogoutAction
