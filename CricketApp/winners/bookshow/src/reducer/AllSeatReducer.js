const INITIAL_STATE = {
    all_seats:[],
    success_msg:"",
    error_msg:""
 }
 
 export const ALL_SEAT_RETRIVE_SUCCESSFUL = 'ALL_SEAT_RETRIVE_SUCCESSFUL'
 export const ALL_SEAT_ERROR = 'ALL_SEAT_ERROR'
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case ALL_SEAT_RETRIVE_SUCCESSFUL:{
             return Object.assign({}, state, { all_seats:action.data});
         }
         case ALL_SEAT_ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         default:
 
             return state;
     }
 }