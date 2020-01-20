import * as deleteService  from '../../Services/deleteService/deleteService.js'
import { USER_DELETED } from '../../Reducer/Fetch/FetchReducer.js'

export const del=(Credential)=>{
    return (dispatch)=>{
        deleteService.del(Credential)
        .then((response)=>{
            if(response.status==200){
                console.log(response);
                dispatch({
                    type:USER_DELETED,
                    data:{id:response.data._id} 
                })
            }
        }).catch((error)=>{
                console.log(error)
        })
    }
}