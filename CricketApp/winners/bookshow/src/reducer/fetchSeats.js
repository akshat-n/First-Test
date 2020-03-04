const INITIAL_STATE = {
    seats:[],
    success_msg:"",
    error_msg:""
 }
 
 export const SEAT_RETRIVE_SUCCESSFUL = 'SEAT_RETRIVE_SUCCESSFUL'
 export const SEAT_ERROR = 'SEAT_ERROR'
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case SEAT_RETRIVE_SUCCESSFUL:{
             return Object.assign({}, state, { seats:action.data});
         }
         case SEAT_ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         default:
 
             return state;
     }
 }