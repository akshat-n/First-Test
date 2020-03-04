import React , { useContext}from 'react'
import {ThemeContext} from '../../context/Theme.js'

export default function ThemedButton() {
    const theme = useContext(ThemeContext);
  
    return (
      <button style={{ color: theme.red}}>
        I am styled by theme context!
      </button>
    );
  }