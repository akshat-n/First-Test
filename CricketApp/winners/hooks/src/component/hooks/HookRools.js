import React, { useState , useEffect }from 'react'

export default function HookRools() {
    const [ name , setName ] = useState('Kiran')

    const [surname, setSurname] = useState('Mistary')
        
    useEffect(function setSurname(){
        document.title=surname
    })
    return (
        
        <div>
            <h1>{localStorage.getItem('Name')}</h1>
        </div>    
        
    )
}
