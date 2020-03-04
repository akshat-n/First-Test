import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const [titleflag, settitleflag] = useState(true)
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const [toggle, settoggle] = useState(true)

    const  mousePosition=(e)=>{
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log("Title Event")
       document.title=`You Clicked ${count} times`
       return ()=>{
           console.log("unmounting code")
           document.title=`stop`
       }
        },[titleflag])


    useEffect(() => {
        console.log("Mouse Event")
    window.addEventListener('mousemove',mousePosition);
     return()=>{    
        window.removeEventListener('mousemove',mousePosition)
     }
    },[toggle])

   
    return (
        <div>
            {toggle &&  <p>x:{x} y:{y}</p> }
           
             <p>You Clicked {count} Button </p>
            <button onClick={() => setCount(prev=>prev+1)} >INCREMENT</button><br/>
              <button onClick={() => settoggle(!toggle)} >MouseFlag</button><br/>
              <button onClick={() => settitleflag(!titleflag)} >TitleFlag</button>

        </div>
    )
}