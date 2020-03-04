import React , { useCallback ,useState } from 'react'

export default function useCallBack() {

    const [count, setcount] = useState(0)
    const handelClick=useCallback(()=>{
        setcount(prev=>prev+1)
    },[])
    const handelAnotherClick=useCallback(()=>{
        alert("second event called....!")
    },[])

   const  simpleClick=()=>{
        setcount(prev=>prev+1)
    }
    return (
        <div>
            <h1>Callback Hook</h1>
            <button value="click me" onClick={handelClick}>{count}</button>
            <br/>
            <br/>
            <button value="click me" onClick={handelAnotherClick}>Click me too!</button>
            <br/>
            <br/>
            <button  onClick={simpleClick}>{count}</button>
        </div>
    )
}
