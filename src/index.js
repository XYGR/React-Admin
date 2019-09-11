import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Page from './Page';
import { Provider } from 'react-redux'
import store from './store'
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.scss';


ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.register();
