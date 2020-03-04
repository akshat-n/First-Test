import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext.js'

class BookList extends Component {
    static contextType=ThemeContext; 
    render() { 
        const { islightTheme , light , dark }=this.context
        const theme=islightTheme?light:dark;
        return ( 
            
            <div className="book-list" style={{background:theme.bg , color:theme.syntax}}  > 
            <ul >
                <li style={{background:theme.ul}}>Socerer's Stone</li>
                <li style={{background:theme.ul}}>Chember of Secrets</li>
                <li style={{background:theme.ul}}>Prisonar of Azkaban </li>
                <li style={{background:theme.ul}}>Goblet of Fire</li>

            </ul>
            </div>
         );
    }
}
 
export default BookList;