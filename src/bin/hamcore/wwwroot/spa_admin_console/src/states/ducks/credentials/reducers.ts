import { fromJS } from 'immutable'
import { State, SomeAction, ActionTypes } from './types'
import { Reducer } from 'redux'

const initialState: State = fromJS({
  authState: `unauthorized`,
  serverUrl: '',
  virtualHub: '',
  password: ''
})

export const reducer: Reducer<State, SomeAction> = (
  state: State = initialState,
  action: SomeAction
): State => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return state.withMutations(s => s.set(`authState`, `requested`))

    case ActionTypes.LOGIN_FAILURE:
      return state.withMutations(s =>
        s.set(`authState`, `failed`).set(`error`, action.payload.error)
      )

    case ActionTypes.LOGIN_SUCCESS:
      return state.withMutations(s => s.set(`authState`, `succeeded`))

    default:
      return state
  }
}
