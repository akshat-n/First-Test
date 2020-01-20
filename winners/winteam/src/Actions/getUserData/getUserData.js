import { USER_GET} from '../../Reducer/AuthReducer/auth.js'
import * as authService from '../../Services/AuthService/auth.js'

export const getUserData=(Credential)=>{
    debugger
    return (dispatch)=>{
        authService.getUserData(Credential)
        .then((response)=>{
          
            if(response.status==201){
                dispatch({
                    type:USER_GET,
                    data:response.data
                })
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
}