const INITIAL_STATE = {
    movies:[],
    success_msg:"",
    error_msg:""
 }
 
 export const MOVIE_RETRIVE_SUCCESSFUL = 'MOVIE_RETRIVE_SUCCESSFUL'
 export const MOVIE_ERROR = 'MOVIE_ERROR'
 
 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         
         case MOVIE_RETRIVE_SUCCESSFUL:{
             return Object.assign({}, state, { movies:action.data});
         }
         case MOVIE_ERROR:{
             return Object.assign({}, state, { error_msg: action.data.error_msg });
         }
         default:
 
             return state;
     }
 }