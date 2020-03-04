const INITIAL_STATE = {
    data:[],
    success_msg:"",
     error_msg:""
 }
 
 export const FETCH_SUCCESSFULLY = 'REGISTER_SUCCESSFULLY';
 export const ERROR_FETCH="ERROR_FETCH";
 
 export default ( state = INITIAL_STATE , action ) =>{
     switch(action.type) {
         case  FETCH_SUCCESSFULLY : {
             
                 return Object.assign({}, state , { data:action.data })
         }
         case  ERROR_FETCH : {
            return Object.assign({}, state , { error_msg:action.data.error_msg })
    }
         default :
         return state;
     }
 }
 
 