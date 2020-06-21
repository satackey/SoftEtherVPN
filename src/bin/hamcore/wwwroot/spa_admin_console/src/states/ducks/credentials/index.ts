import { ActionTypes, Actions, SomeAction } from './types'
import { reducer } from './reducers'

export type CledetialsActions = Actions
export type CredentialsSomeAction = SomeAction
export { ActionTypes as CredentialsActionTypes, reducer as credentialsReducer }
