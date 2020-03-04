import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { ThemeContext } from '../Contexts/ThemeContext.js'
class ToggleTheme extends Component {

    static contextType=ThemeContext;
    render() { 
        const { toggleTheme , islightTheme} =this.context;
        const theme=islightTheme?"DarkTheme":"Light Theme"
        return ( 
            <Button onClick={toggleTheme} color='secondary'>{theme}</Button>
         );
    }
}
 
export default ToggleTheme;