// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// DEV TOOLS
import { compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// REDUCER
import { rootReducer } from './redux/reducers'

// COMPONENTS
import App from './App';

// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// STORE
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)
    console.log('Created Store: ',store)


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);


