import {
    INCREMENT_SAGAS,
    DECREMENT_SAGAS,
    FETCH_START_SAGAS,
    FETCH_SUCCESS_SAGAS
} from './actionTypes';
const initialState = {
    count: 0,
    list: [],
    fetchError: null,
    fetchPending: false
};

export function settingReducer(state, action) {
    switch (action.type) {
        case INCREMENT_SAGAS:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_SAGAS:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
export function sagasReducer(state, action) {
    switch (action.type) {
        case FETCH_START_SAGAS:
            return {
                ...state,
                fetchPending: true,
                fetchError: null
            };
        case FETCH_SUCCESS_SAGAS:
            return {
                ...state,
                fetchPending: false,
                fetchError: null,
                list: action.list
            };
        default:
            return state;
    }
}
const reducers = [settingReducer, sagasReducer];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    /* istanbul ignore next */
    return reducers.reduce((s, r) => r(s, action), newState);
}
