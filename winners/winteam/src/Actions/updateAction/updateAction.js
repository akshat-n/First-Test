import * as updateService from '../../Services/UpdateService/updateData.js'
import {USER_UPDATED} from '../../Reducer/Fetch/FetchReducer.js'
export const updateData=(id,Credential)=>{

    return (dispatch)=>{
        
        updateService.updateData(id,Credential)
        .then((response)=>{
            if(response.status===200){
                debugger
                dispatch({
                    type:USER_UPDATED,
                    data:response.data
                })
            }
        }).catch((error)=>{
              console.log(error)
        })
    }
}