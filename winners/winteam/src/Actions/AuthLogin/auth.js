import * as authService  from '../../Services/AuthService/auth.js'
import { LOGIN_SUCCESSFUL , INVALID_USER ,LOGOUT ,USER_GET} from '../../Reducer/AuthReducer/auth.js'

export const login=(Credential)=>{

    return (dispatch)=>{
        authService.login(Credential)
        .then((response)=>{
          
            if(response.status==201){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('role',response.data.role);
                dispatch({
                    type:LOGIN_SUCCESSFUL,
                    data:{token:response.data.token,role:response.data.role,error_msg:""}
                })
            }
            else
            {
                 alert("Invalid Username or password")
                dispatch({
                    type:INVALID_USER,
                    data:{error_msg:"Invalid user"}
                    
                })
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
}
export const getUserData=(Credential)=>{
    debugger
    return (dispatch)=>{
        authService.getUserData(Credential)
        .then((response)=>{
            console.log( "data",response.data)
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

export const logoutUser=()=>{
    return (dispatch)=>{
        dispatch({
            type:LOGOUT 
        })
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }
}