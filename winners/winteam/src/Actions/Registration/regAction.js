import * as regServive  from '../../Services/Registration/regService.js'
import { REGISTER_SUCCESSFULLY } from '../../Reducer/Registration/regReducer.js'

export const register=(Credential)=>{

    return (dispatch)=>{
        regServive.register(Credential)
        .then((response)=>{
            if(response.status==200){

                dispatch({
                    type:REGISTER_SUCCESSFULLY,
                    data:{success_msg:"User Registered Successfully"}
                    
                })
            }
        }).catch((error)=>{
            
                console.log(error)
        })
    }
}