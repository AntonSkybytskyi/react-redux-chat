import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootStore from './reducers';

const store = createStore(
  rootStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


export default store;