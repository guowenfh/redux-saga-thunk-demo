import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configStore from './lib/configStore';
import routeConfig from './lib/routeConfig';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const store = configStore({});
const rootEl = document.getElementById('root')


function renderApp(app){
    ReactDOM.render(
        <AppContainer>
            {app}
        </AppContainer>,
    rootEl);
}
renderApp(<Root store={store} routeConfig={routeConfig} />);

if (module.hot) {
    module.hot.accept('./lib/routeConfig', () => {
        const nextRouteConfig = require('./lib/routeConfig').default; // eslint-disable-line
        renderApp(<Root store={store} routeConfig={nextRouteConfig} />);
    });
}

registerServiceWorker();
