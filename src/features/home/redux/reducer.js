import { reducer as fetchReducer } from './fetch';
import { reducer as countReducer } from './count';
const initialState = {
    count: 0,
    topicList: [],
    fetchError: null,
    fetchPending: false,
};
const reducers = [fetchReducer, countReducer];


export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Put global reducers here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}
