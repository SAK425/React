import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import Reducer from './reducer/Reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(Reducer,{products:["iphone11","iphone12","iphone13"],categories:["mobile","headphones","cases"]},composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
