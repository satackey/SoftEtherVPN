import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer, RootState } from './ducks/rootReducer'
import { rootSaga } from './sagas/Root'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
