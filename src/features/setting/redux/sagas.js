import {
    INCREMENT_SAGAS,
    EXECUTE_INCREMENT_SAGAS,
    DECREMENT_SAGAS,
    EXECUTE_DECREMENT_SAGAS,
    FETCH_START_SAGAS,
    FETCH_SUCCESS_SAGAS,
    EXECUTE_FETCH_START_SAGAS
} from './actionTypes';
import { put, call, all,fork,takeLatest } from 'redux-saga/effects';
import { delay, takeEvery } from 'redux-saga';
import request from 'lib/request';

// Our worker Saga: 将异步执行 increment 任务
function* incrementAsync() {
    yield call(delay, 500);
    yield put({ type: INCREMENT_SAGAS });
}
function* decrementSagas() {
    yield call(delay, 2000);
    yield put({ type: DECREMENT_SAGAS });
}
function* fetchListSagas() {
    yield put({
        type: FETCH_START_SAGAS,
    });
    yield call(delay, 1000);
    let res = yield call(request.get, 'https://cnodejs.org/api/v1/topics', {});
    yield put({
        type: FETCH_SUCCESS_SAGAS,
        list: res.data
    });
}
function* watchIncrement(){
    yield takeEvery(EXECUTE_INCREMENT_SAGAS, incrementAsync)
}
function* watchDecrement(){
    yield takeEvery(EXECUTE_DECREMENT_SAGAS, decrementSagas)
}
function* watchFetch(){
    yield takeLatest(EXECUTE_FETCH_START_SAGAS, fetchListSagas)
}
export default function* rootSaga() {
    yield all([
        fork(watchIncrement),
        fork(watchDecrement),
        fork(watchFetch)
    ]);
}
