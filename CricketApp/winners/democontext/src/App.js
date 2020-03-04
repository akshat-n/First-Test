import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import ToggleTheme from './Components/ToggleTheme';

 class App extends Component {
   
  render() {
    return (
      <div className="App">
      <ThemeContextProvider>
      <Navbar/>
      <BookList/>
      <ToggleTheme/>
      </ThemeContextProvider>
    </div>
    )
  }
}

export default App



