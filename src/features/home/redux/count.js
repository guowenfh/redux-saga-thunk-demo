import {INCREMENT,DECREMENT} from './actionTypes';
export function counterPlusOne() {
    return {
        type: INCREMENT
    };
}

export function counterMinusOne() {
    return {
        type: DECREMENT
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
}