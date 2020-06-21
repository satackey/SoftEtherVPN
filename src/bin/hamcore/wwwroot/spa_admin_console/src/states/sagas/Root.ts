import { SagaIterator } from '@redux-saga/core'
import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { loginFailed, loginSucceeded } from '../ducks/credentials/actions'
import { StartLoginAction, LOGIN_REQUEST } from '../ducks/credentials/types'
import { login } from './Api'

export function* rootSaga(): SagaIterator {
  yield fork(watchLogin)
}

function* handleLogin(action: StartLoginAction): SagaIterator {
  console.log(`handleLogin: ${JSON.stringify(action)}`)
  try {
    yield call(login, action.payload)
    yield put(loginSucceeded())
  } catch (e) {
    console.error(e)
    yield put(loginFailed(e))
  }
}

function* watchLogin(): SagaIterator {
  console.log(`takeLatest`)
  yield takeLatest(LOGIN_REQUEST, handleLogin)
}
