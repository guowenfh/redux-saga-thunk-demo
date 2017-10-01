import setting from '../features/setting/redux/sagas'
import {all,fork} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        fork(setting),
    ])
}