import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext.js'
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {

        return (
            <ThemeContext.Consumer>{(context) => {
                const { islightTheme, light, dark } = context;
                const theme = islightTheme ? light : dark
                return (
                    <nav style={{ background: theme.ul, color: theme.syntax }}>
                        <h1>Harry Potter</h1>
                        <ul >
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>

        );
    }
}

export default Navbar;