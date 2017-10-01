import {
    EXECUTE_INCREMENT_SAGAS,
    EXECUTE_DECREMENT_SAGAS,
    EXECUTE_FETCH_START_SAGAS,
} from './actionTypes';

export function counterPlusOneSaga() {
    return {
        type: EXECUTE_INCREMENT_SAGAS
    };
}

export function counterMinusOneSaga() {
    return {
        type: EXECUTE_DECREMENT_SAGAS
    };
}
export function fetchListSaga() {
    return {
        type: EXECUTE_FETCH_START_SAGAS
    };
}
