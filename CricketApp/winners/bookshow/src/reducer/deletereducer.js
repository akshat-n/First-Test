const INITIAL_STATE = {
    success_msg:"",
    error_msg:""
 }
 
 export const DELETE_SEAT = 'DELETE_SEAT'
 export const DELETE_ERROR = 'DELETE_ERROR'
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case DELETE_SEAT:{
             return Object.assign({}, state, { success_msg:action.data.success_msg});
         }
         case DELETE_ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         default:
 
             return state;
     }
 }