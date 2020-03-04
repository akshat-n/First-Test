import React, { useReducer } from 'react'

const initialState={count:0}

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':{
            return {count:state.count+1}
        }
        case 'DECREMENT':{
            return { count:state.count-1}
        }
        case 'INCREMENT5':{
            return {count:state.count+action.value}
        }
        case 'DECREMENT5':{
            return { count:state.count-action.value}
        }
        default:
            return state;
    }
}

function Counter(){
 const [state, dispatch] = useReducer(reducer, initialState)   
 return(
     <div>
          <div>
              <h1>
                  Count:{state.count}
              </h1>
          </div>
          <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button><span>   </span>
          <button onClick={()=>dispatch({type:'DECREMENT' })}>-1</button>
          <button onClick={()=>dispatch({type:'INCREMENT5',value:5})}>+5</button><span>   </span>
          <button onClick={()=>dispatch({type:'DECREMENT5' ,value:5})}>-5</button>    
     </div>
    
 )
}
export default Counter
