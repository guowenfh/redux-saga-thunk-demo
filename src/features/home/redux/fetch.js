import request from 'lib/request';
import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from './actionTypes';

const delay = (time = 0)=> new Promise(resolve=>setTimeout(()=>{resolve()},time))

// redux-thunk
export function fetchList() {
    return async (dispatch)=>{
        dispatch({
            type: FETCH_START
        });
        try {
            await delay(1000);
            let res = await request.get('https://cnodejs.org/api/v1/topics');
            console.error(res);
            dispatch({
                type: FETCH_SUCCESS,
                data: res.data
            });
        } catch (err) {
            dispatch({
                type: FETCH_ERROR,
                data: { error: err }
            });
        }
    }
}
export function reducer(state, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchPending: true,
        fetchError: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        fetchPending: false,
        fetchError: null,
        topicList: action.data
      };

    case FETCH_ERROR:
      return {
        ...state,
        fetchPending: false,
        fetchError: action.data.error,
      };

    default:
      return state;
  }
}