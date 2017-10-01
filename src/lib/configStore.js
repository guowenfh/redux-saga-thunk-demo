import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
// NOTE: Do not change middleares delaration pattern since rekit plugins may register middlewares to it.
const middlewares = [
    sagaMiddleware,
    thunk,
    router
];
let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'development') {
//   const createLogger = require('redux-logger').createLogger;

//   const logger = createLogger({ collapsed: true });
//   middlewares.push(logger);

if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
}
}

export default function configureStore(initialState={}) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares), devToolsExtension)
    );
    sagaMiddleware.run(rootSagas);

    /* istanbul ignore if  */
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
