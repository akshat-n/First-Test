import React,{useState,useEffect} from 'react'
 function useClock() {
    
    const [clock , setClock] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        let id=setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000)
        return ()=>clearInterval(id);
    },[])
    return (
        clock
    )
}

function Clock(){
    const clock=useClock();
    return (
        <h1>{clock}</h1>
    )
}
export default Clock