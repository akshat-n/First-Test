import * as FetchService from '../services/fetchService.js'
import { MOVIE_RETRIVE_SUCCESSFUL , MOVIE_ERROR } from '../reducer/fetchMovie.js'


export const fetchMovie=(credentials)=>{
    return (dispatch)=>{
        FetchService.fetchMovie(credentials)
        .then((response)=>{
            if(response.status===200){
                
                dispatch({
                    type:MOVIE_RETRIVE_SUCCESSFUL,
                    data:response.data
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:MOVIE_ERROR,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}