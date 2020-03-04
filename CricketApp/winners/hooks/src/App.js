import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Switch , Link } from "react-router-dom";

import hook1 from './component/hooks/hook1.js'
import RulesDemo from './component/hooks/HookRools.js'
import CallBack from './component/hooks/useCallBack.js'
import CustomHook from './component/hooks/customHook.js'
import Toolbar from './component/hooks/Toolbar.js'
import Reducer from './component/AdditionalHooks/Reducer/UseReducer.js'

export class App extends Component {
    render() {
        return (
           <Router>
               <Link to='/'>useState</Link><br/>
               <Link to='/rules'>hook Rules</Link><br/>
               <Link to='/callback'>useCallback</Link><br/>
               <Link to='/custom'>customHook</Link><br/>
               <Link to='/toolbar'>UseContext</Link><br/>
               <Link to='/reducer'>UseReducer</Link>
              
               <Switch>
                   <Route exact path='/' component={hook1}/>  
                   <Route path='/rules' component={RulesDemo}/>
                   <Route path='/callback' component={CallBack}/>
                   <Route path='/custom' component={CustomHook}/>
                   <Route path='/toolbar' component={Toolbar}/>
                   <Route path='/reducer' component={Reducer}/>
                 
               </Switch>
           </Router>
        )
    }
}

export default App
