import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

let devToolsExtension = f => f;
if (
    process.env.NODE_ENV !== 'production' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' // eslint-disable-line
) {
  devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line
}

export default function configureStore(history, initialState) {
    const createStoreWithMiddleware = compose(
        applyMiddleware(
            thunkMiddleware,
            promise,
            routerMiddleware(history),
        ),
        devToolsExtension,
    )(createStore);

    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers'); // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
