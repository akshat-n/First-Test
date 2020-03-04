const INITIAL_STATE = {
    theater:[],
    success_msg:"",
    error_msg:""
 }
 
 export const RETRIVE_SUCCESSFUL = 'RETRIVE_SUCCESSFUL'
 export const ERROR = 'ERROR'
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case RETRIVE_SUCCESSFUL:{
             return Object.assign({}, state, { theater:action.data});
         }
         case ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         default:
 
             return state;
     }
 }