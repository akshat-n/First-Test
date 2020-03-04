import React, { useState , useContext , useEffect} from 'react';
import { BookContext } from '../contexts/BookContext';


const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const { dispatch } =useContext(BookContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:"ADD_BOOK",book:{title,author}});
        setTitle('')
        setAuthor('')
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Book Title" required/>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Book Author" required/>
            <input type="submit" value="Add"/>  
        </form>
    );
}
 
export default BookForm;
