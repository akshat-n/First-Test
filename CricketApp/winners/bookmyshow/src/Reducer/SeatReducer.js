const INITIAL_STATE = {
    success_msg:"",
     error_msg:""
 }
 
 export const REGISTER_SUCCESSFULLY = 'REGISTER_SUCCESSFULLY';
 
 export default ( state = INITIAL_STATE , action ) =>{
     switch(action.type) {
         case  REGISTER_SUCCESSFULLY : {
                 return Object.assign({}, state , { success_msg:action.data.success_msg })
         }
         default :
         return state;
     }
 }
 
 