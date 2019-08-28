import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'

const history = createBrowserHistory({
  basename: '/'
});

const configureStore = () => {
  const initialState = {}
  const logger = createLogger({ collapsed: true });
  const appReducer = combineReducers({
    routing: routerReducer,
    ...rootReducer
  });
  return createStore(
    appReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        logger,
        routerMiddleware(history)
      )
    )
  )
} 

const store = configureStore()

export { store, history }