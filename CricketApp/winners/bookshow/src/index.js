import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'

import store from './store.js'
import App from './App.js'
import Theater from './container/Theater/Theater.js'

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider> 
    ,document.getElementById('root')
)