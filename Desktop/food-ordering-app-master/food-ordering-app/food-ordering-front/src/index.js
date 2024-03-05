import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtInterceptor } from './components/interceptor/Interceptor';
import {store} from './store-redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});


//test commit
// jwtInterceptor();
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>   
    <Provider store = {store}>
      <PersistGate loading = {null} persistor={persistor}>
        <App/>
      </PersistGate>  
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

