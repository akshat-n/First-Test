const INITIAL_STATE = {
    playerData:[],
    success_msg:"",
    error_msg:""
 }
 
 export const RETRIVE_SUCCESSFUL = 'RETRIVE_SUCCESSFUL'
 export const ERROR = 'ERROR'
 export const USER_DELETED='USER_DELETED'
 export const USER_UPDATED='USER_UPDATED'
 
 
 
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case RETRIVE_SUCCESSFUL:{
             return Object.assign({}, state, { playerData:action.data});
         }
         case ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         case USER_DELETED:{
             const {playerData}=state;
             return {playerData:playerData.filter(playerData => playerData._id !== action.data.id)}
         }
         case USER_UPDATED:{
             debugger
             const{playerData}=state
            
             return {playerData:playerData.map(playerData=>playerData._id==action.data._id?action.data:playerData)}
             
        }
         default:
 
             return state;
     }
 }