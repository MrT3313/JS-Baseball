// IMPORTS
    import React from 'react';
    import ReactDOM from 'react-dom';

// REDUX
    import {createStore} from 'redux'
    import { Provider } from 'react-redux'
    // DEV TOOLS
        import { compose, applyMiddleware } from 'redux'
        import logger from 'redux-logger'
        import thunk from 'redux-thunk'
    // Reducer
        import {rootReducer} from './redux/reducers'

// COMPONENTS
    import App from './App';

// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// STORE w/ Enhancements
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


