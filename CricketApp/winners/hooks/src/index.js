import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeContext , themes ,colors} from './context/Theme.js'
import App from './App.js'



ReactDOM.render(
    <ThemeContext.Provider value={colors}>
        <App/>
    </ThemeContext.Provider>
    ,document.getElementById('root')
)