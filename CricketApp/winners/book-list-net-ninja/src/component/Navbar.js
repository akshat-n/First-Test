import React , {useContext } from 'react';
import { BookContext }  from '../contexts/BookContext';

 function Navbar() {
    const { books } =useContext(BookContext);
    return (
        <div className="navbar">
                <h1 align='center'>Reading...!</h1>
                <p align='center'>You Have to go through {books.length} books....!</p>
        </div>
    )
}
export default Navbar
