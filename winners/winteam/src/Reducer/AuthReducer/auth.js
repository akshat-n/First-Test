const INITIAL_STATE = {
    token:"",
    role:"",
    error_msg:"",
    data:[]
}

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const USER_GET="USER_GET"
export const INVALID_USER = 'INVALID_USER';
export const LOGOUT = 'LOGOUT';

export default ( state = INITIAL_STATE , action ) =>{
    switch(action.type) {
        case  LOGIN_SUCCESSFUL : {
                return Object.assign({}, state , { token:action.data.token,role:action.data.role,error_msg:action.data.error_msg,data:action.data.playerData})
        }
        case INVALID_USER:{
            return Object.assign({}, state , { error_msg:action.data.error_msg,token:"",role:"" })
        }
        case USER_GET:{
            debugger
            return Object.assign({}, state , { data:action.data })
        }
        case LOGOUT:{
            return Object.assign({}, state, { token: "", role: "" });
        }
        default :
        return state;
    }
}

