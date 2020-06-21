import { Action } from 'redux'
import { RecordOf } from 'immutable'

//
// ActionTypes

export const LOGIN_REQUEST = `LOGIN_REQUEST` as const
export const LOGIN_SUCCESS = `LOGIN_SUCCESS` as const
export const LOGIN_FAILURE = `LOGIN_FAILURE` as const
export const LOGGED_OUT = `LOGGED_OUT` as const

export const ActionTypes = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGGED_OUT
}

export type State = RecordOf<{
  authState: `unauthorized` | `requested` | `succeeded` | `failed`
  error?: Error
  serverUrl: string
  virtualHub: string
  password: string
}>

//
// Actions

export interface StartLoginAction extends Action {
  type: typeof LOGIN_REQUEST
  payload: {
    serverUrl: string
    virtualHub: string
    password: string
  }
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

export interface Actions {
  StartLoginAction: StartLoginAction
  LoginSuccessAction: LoginSuccessAction
  LoginFailureAction: LoginFailureAction
  LogoutAction: LogoutAction
}

export type SomeAction =
  | StartLoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
