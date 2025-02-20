import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore,applyMiddleware,compose,combineReducers } from 'redux'
import BurgerBuilderReducer from './store/reducer/BurgerBuilder'
import OrdserReducer from './store/reducer/order'
import * as serviceWorker from './serviceWorker';

const rootReducer=combineReducers(
  {
      burgerReducer:BurgerBuilderReducer,
      orderReducer:OrdserReducer,
  }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app= <Provider store={store}><BrowserRouter>
     <App/>
</BrowserRouter>
</Provider>
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
