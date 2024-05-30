import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducer';
import {Provider} from 'react-redux'
import { loggerMiddleware } from './middleware';

const root = ReactDOM.createRoot(document.getElementById('root'));

const middleware = applyMiddleware(loggerMiddleware)

const store = createStore(rootReducer, middleware)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
