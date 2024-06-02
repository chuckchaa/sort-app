import { all } from 'redux-saga/effects'
import control from './control'


export default function* rootSaga() {
  yield all([
    ...control,
  ])
}
