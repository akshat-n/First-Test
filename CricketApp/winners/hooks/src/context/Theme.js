import React from 'react'

export const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  export const colors={
    blue: "#03619c",
    yellow: "#8c8f03",
    red: "#9c0312"
  }
  export const ThemeContext = React.createContext(colors);
  
  
  
  
  
  