import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
//
//
//
import './css/bootstrap.min.css';
import './css/navbar/chartist-custom.css';
import './css/navbar/main.css';
import './css/navbar/font-awesome.min.css';
import './css/navbar/style.css';
//
//
//
import registerServiceWorker from './registerServiceWorker';
import Routes from './function/route/views/Routes.js';
import store from './Store.js';
//
//
//
const App = () => {
  return (<Provider store={store}>
    <BrowserRouter><Routes/></BrowserRouter>
  </Provider>);
}

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
