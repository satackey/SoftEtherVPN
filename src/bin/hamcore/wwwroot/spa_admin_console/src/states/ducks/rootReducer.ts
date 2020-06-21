import { combineReducers } from 'redux'
import { credentialsReducer } from './credentials'

export const rootReducer = combineReducers({ credentials: credentialsReducer })
export type RootState = ReturnType<typeof rootReducer>
