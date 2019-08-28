import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

let composeEnhancers

const logger = createLogger({ collapsed: true });
const history = createBrowserHistory({
  basename: '/'
});
if(process.env.NODE_ENV === 'development') {
  composeEnhancers = composeWithDevTools(
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  )
} else {
  composeEnhancers = compose(
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  )
}


const configureStore = () => {
  const initialState = {}
  const appReducer = combineReducers({
    routing: routerReducer,
    ...rootReducer
  });
  return createStore(
    appReducer,
    initialState,
    composeEnhancers
  )
} 

const store = configureStore()

export { store, history }